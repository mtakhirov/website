import type { Locale } from "#i18n";

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3 | 4;
}

export interface PostMeta {
  title: string;
  description: string;
  date: string;
  updated?: string;
  tags: string[];
  published: boolean;
}

export interface Post {
  /** Route slug, e.g. `monadlar-haqida` or `series-part-1`. */
  slug: string;
  /** Directory relative to `content/`, e.g. `series/part-1`. Used for assets. */
  dir: string;
  /** Language of the file actually rendered. */
  lang: Locale;
  /** Language the visitor asked for. */
  requestedLang: Locale;
  /** True when `lang !== requestedLang`. */
  isFallback: boolean;
  availableLangs: Locale[];
  meta: PostMeta;
  content: string;
  readingMinutes: number;
  headings: Heading[];
}
