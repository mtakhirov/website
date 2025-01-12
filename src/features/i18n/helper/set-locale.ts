"use server";

import type { Locale } from "#features/i18n";

import { COOKIE_NAME } from "#features/i18n";
import { cookies } from "next/headers";

export async function setUserLocale(locale: Locale): Promise<void> {
  const cookie = await cookies();
  cookie.set(COOKIE_NAME, locale);
}
