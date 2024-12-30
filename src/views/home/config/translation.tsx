import type { RichTranslationValues } from "next-intl";

export const translationFormats: RichTranslationValues = {
  "bold": (chunk) => <b>{chunk}</b>,
  "strike": (chunk) => <s>{chunk}</s>,
  "text-red": (chunk) => <span className="text-red">{chunk}</span>,
};
