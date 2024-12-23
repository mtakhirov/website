import type { AbstractIntlMessages } from "next-intl";

import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "#features/i18n";

interface DynamicImport {
  default: AbstractIntlMessages;
}

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  const { default: messages } = (await import(
    `../../../../locales/${locale}.json`
  )) as DynamicImport;

  return { locale, messages };
});
