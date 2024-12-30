"use server";

import type { Locale } from "#features/i18n";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "#features/i18n";

export const setUserLocale = async (locale: Locale): Promise<void> => {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
};
