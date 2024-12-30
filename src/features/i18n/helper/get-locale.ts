"use server";

import type { Locale } from "#features/i18n";

import { cookies } from "next/headers";
import {
  COOKIE_NAME,
  defaultLocale,
  locales,
  setUserLocale,
} from "#features/i18n";

export const getUserLocale = async (): Promise<Locale> => {
  const cookie = await cookies();
  const locale = (cookie.get(COOKIE_NAME)?.value as Locale) ?? defaultLocale;

  if (!locales.includes(locale)) {
    console.warn("Undefined locale detected!");
    await setUserLocale(defaultLocale);

    return defaultLocale;
  }

  return locale;
};
