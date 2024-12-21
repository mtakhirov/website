"use server";

import { cookies } from "next/headers";
import { type Locale, COOKIE_NAME, defaultLocale } from "#features/i18n/config";

export const getUserLocale = async (): Promise<string> => {
  const cookie = await cookies();
  return cookie.get(COOKIE_NAME)?.value ?? defaultLocale;
};
