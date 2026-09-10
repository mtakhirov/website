import type { Locale } from "./config";
import { en } from "./dictionaries/en";
import { uz } from "./dictionaries/uz";

export type Dictionary = typeof uz;

const dictionaries: Record<Locale, Dictionary> = { uz, en };

export function getDictionary(lang: Locale): Dictionary {
  return dictionaries[lang];
}
