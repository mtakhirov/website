import type { MetadataRoute } from "next";
import { SITE_URL } from "#config/site";
import { locales } from "#i18n";
import { getPosts } from "#lib/blog";

const STATIC_PATHS: { path: string; priority: number; changeFrequency: "weekly" | "monthly" }[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.9, changeFrequency: "weekly" },
  { path: "/projects", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume", priority: 0.7, changeFrequency: "monthly" },
  { path: "/uses", priority: 0.5, changeFrequency: "monthly" },
];

function languages(path: string): Record<string, string> {
  return Object.fromEntries(locales.map(locale => [locale, `${SITE_URL}/${locale}${path}`]));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const item of STATIC_PATHS) {
      entries.push({
        url: `${SITE_URL}/${locale}${item.path}`,
        lastModified: new Date(),
        changeFrequency: item.changeFrequency,
        priority: item.priority,
        alternates: { languages: languages(item.path) },
      });
    }

    for (const post of getPosts(locale)) {
      const path = `/blog/${post.slug}`;
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        lastModified: new Date(post.meta.updated ?? post.meta.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages: languages(path) },
      });
    }
  }

  return entries;
}
