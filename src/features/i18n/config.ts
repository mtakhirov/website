export type Locale = (typeof locales)[number];

export const COOKIE_NAME = "TKHRV_LOCALE";

export const locales = ["uz", "en"] as const;
export const defaultLocale: Locale = "uz";
