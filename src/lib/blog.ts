import type { Heading, Post, PostMeta } from "#types";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";
import { defaultLocale, isLocale, type Locale, locales } from "#i18n";

const CONTENT_DIR = path.join(process.cwd(), "content");

const metaSchema = z.object({
  title: z.string().min(1),
  description: z.string().default(""),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  tags: z.array(z.string()).default([]),
  published: z.boolean().default(false),
});

/*
 * Slugs vs directories
 *   content/<slug>/            → route slug `<slug>`
 *   content/<series>/part-N/   → route slug `<series>-part-N`
 * Routes are single-segment so `opengraph-image` can live next to the page.
 */

function slugFor(dir: string): string {
  return dir.replace(/\/part-(\d+)$/, "-part-$1");
}

function dirFor(slug: string): string {
  if (fs.existsSync(path.join(CONTENT_DIR, slug))) return slug;
  const match = /^(.+)-part-(\d+)$/.exec(slug);
  if (match) {
    const dir = `${match[1]}/part-${match[2]}`;
    if (fs.existsSync(path.join(CONTENT_DIR, dir))) return dir;
  }
  return slug;
}

function partNumber(slug: string): number {
  const match = /part-(\d+)$/.exec(slug);
  return match ? Number(match[1]) : 0;
}

/** `index.<lang>.mdx`; a legacy `index.mdx` counts as the default locale. */
function fileFor(dir: string, lang: Locale): string | null {
  const localized = path.join(CONTENT_DIR, dir, `index.${lang}.mdx`);
  if (fs.existsSync(localized)) return localized;
  if (lang === defaultLocale) {
    const legacy = path.join(CONTENT_DIR, dir, "index.mdx");
    if (fs.existsSync(legacy)) return legacy;
  }
  return null;
}

function availableLangs(dir: string): Locale[] {
  return locales.filter(lang => fileFor(dir, lang) !== null);
}

/** Every route slug that has at least one language file. */
export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const dirs: string[] = [];
  for (const entry of fs.readdirSync(CONTENT_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    if (availableLangs(entry.name).length > 0) {
      dirs.push(entry.name);
      continue;
    }

    const parts = fs
      .readdirSync(path.join(CONTENT_DIR, entry.name), { withFileTypes: true })
      .filter(part => part.isDirectory() && /^part-\d+$/.test(part.name))
      .map(part => `${entry.name}/${part.name}`)
      .filter(dir => availableLangs(dir).length > 0)
      .sort((a, b) => partNumber(a) - partNumber(b));

    dirs.push(...parts);
  }

  return dirs.map(slugFor);
}

export function getPost(slug: string, requestedLang: Locale): Post | null {
  const dir = dirFor(slug);
  const langs = availableLangs(dir);
  if (langs.length === 0) return null;

  const lang = langs.includes(requestedLang)
    ? requestedLang
    : langs.includes(defaultLocale) ? defaultLocale : langs[0]!;

  const file = fileFor(dir, lang);
  if (!file) return null;

  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const parsed = metaSchema.safeParse(data);
  if (!parsed.success) {
    console.warn(`[blog] invalid frontmatter in ${file}:`, parsed.error.issues);
    return null;
  }

  return {
    slug,
    dir,
    lang,
    requestedLang,
    isFallback: lang !== requestedLang,
    availableLangs: langs,
    meta: parsed.data satisfies PostMeta,
    content,
    readingMinutes: readingMinutes(content),
    headings: extractHeadings(content),
  };
}

/** Published posts for a language (with fallback), newest first. */
export function getPosts(lang: Locale): Post[] {
  return getAllSlugs()
    .map(slug => getPost(slug, lang))
    .filter((post): post is Post => post !== null && post.meta.published)
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
}

export function getAdjacentPosts(slug: string, lang: Locale): { prev: Post | null; next: Post | null } {
  const posts = getPosts(lang);
  const index = posts.findIndex(post => post.slug === slug);
  if (index === -1) return { prev: null, next: null };
  // Sorted newest first: "prev" is older, "next" is newer.
  return {
    prev: posts[index + 1] ?? null,
    next: posts[index - 1] ?? null,
  };
}

/** All parts of the series a post belongs to, in order. Empty for standalone posts. */
export function getSeries(slug: string, lang: Locale): Post[] {
  const match = /^(.+)-part-\d+$/.exec(slug);
  if (!match) return [];
  const base = match[1]!;
  return getPosts(lang)
    .filter(post => post.slug.startsWith(`${base}-part-`))
    .sort((a, b) => partNumber(a.slug) - partNumber(b.slug));
}

export function parseLang(value: string | undefined): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Words per minute; code blocks are read slower, so we do not strip them. */
export function readingMinutes(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Matches the ids generated by rehype-slug (github-slugger). */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-");
}

export function extractHeadings(content: string): Heading[] {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  let inFence = false;

  for (const line of content.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,4})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const level = match[1]!.length as Heading["level"];
    const text = match[2]!.replace(/[`*_~]/g, "");
    let id = slugify(text);
    const count = seen.get(id) ?? 0;
    seen.set(id, count + 1);
    if (count > 0) id = `${id}-${count}`;

    headings.push({ id, text, level });
  }

  return headings;
}
