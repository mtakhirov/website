import type { Route } from "next";

export const locales = ["uz", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const localeNames: Record<Locale, string> = {
  uz: "O'zbekcha",
  en: "English",
};

/** BCP 47 tags used for `<html lang>` and OpenGraph. */
export const localeTags: Record<Locale, string> = {
  uz: "uz-Latn",
  en: "en",
};

export const ogLocales: Record<Locale, string> = {
  uz: "uz_UZ",
  en: "en_US",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}

/** Text that exists in every locale. */
export type Localized<T = string> = Record<Locale, T>;

export function pick<T>(value: Localized<T>, lang: Locale): T {
  return value[lang];
}

/** Locale-prefixed, typed href. `route("uz", "/blog")` → `/uz/blog`. */
export function route(lang: Locale, path: string = ""): Route {
  return `/${lang}${path}` as Route;
}
