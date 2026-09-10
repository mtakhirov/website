#!/usr/bin/env node
/**
 * Create a new blog post.
 *
 *   node scripts/create-post.mjs <slug> [--lang uz|en] [--part N]
 *   bun run post my-post --lang en
 */
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const LOCALES = ["uz", "en"];

function parseArgs(argv) {
  const args = { lang: "uz", part: null, slug: null };
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--lang") args.lang = argv[++i];
    else if (arg === "--part") args.part = argv[++i];
    else if (!args.slug) args.slug = arg;
  }
  return args;
}

const { slug, lang, part } = parseArgs(process.argv.slice(2));

if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("Usage: node scripts/create-post.mjs <slug> [--lang uz|en] [--part N]");
  console.error("Slug must be lowercase letters, digits and dashes.");
  process.exit(1);
}
if (!LOCALES.includes(lang)) {
  console.error(`Unknown language "${lang}". Use one of: ${LOCALES.join(", ")}`);
  process.exit(1);
}

const dir = part ? join(process.cwd(), "content", slug, `part-${part}`) : join(process.cwd(), "content", slug);
const file = join(dir, `index.${lang}.mdx`);
const date = new Date().toISOString().slice(0, 10);
const title = slug.split("-").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");

const template = `---
title: "${title}${part ? ` (${part})` : ""}"
description: ""
date: "${date}"
tags: []
published: false
---

## Kirish

`;

try {
  await mkdir(join(dir, "assets"), { recursive: true });
  await writeFile(file, template, { flag: "wx" });
  console.log(`Created ${file}`);
}
catch (error) {
  if (error.code === "EEXIST") console.error(`Already exists: ${file}`);
  else console.error(error);
  process.exit(1);
}
