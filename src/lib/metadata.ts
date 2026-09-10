import type { Metadata } from "next";
import { SITE_URL } from "#config/site";
import { getDictionary, type Locale, locales, ogLocales } from "#i18n";

interface LocalizedMetadataOptions {
  lang: Locale;
  /** Path without the locale prefix, e.g. `/blog/slug`. Use `""` for the home page. */
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  tags?: string[];
}

/** Per-page metadata with canonical + hreflang alternates for every locale. */
export function localizedMetadata({
  lang,
  path,
  title,
  description,
  type = "website",
  publishedTime,
  modifiedTime,
  tags,
}: LocalizedMetadataOptions): Metadata {
  const dict = getDictionary(lang);
  const url = `${SITE_URL}/${lang}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map(locale => [locale, `${SITE_URL}/${locale}${path}`])),
        "x-default": `${SITE_URL}/uz${path}`,
      },
    },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: dict.meta.siteName,
      locale: ogLocales[lang],
      alternateLocale: locales.filter(locale => locale !== lang).map(locale => ogLocales[locale]),
      ...(type === "article" ? { publishedTime, modifiedTime, tags } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
