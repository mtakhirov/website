"use server";

import type { Locale } from "#features/i18n/config";

import { cookies } from "next/headers";
import { COOKIE_NAME } from "#features/i18n/config";

export const setUserLocale = async (locale: Locale): Promise<void> => {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
};
