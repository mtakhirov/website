import { getRequestConfig } from "next-intl/server";
import { getUserLocale } from "./helpers";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale: locale,
    messages: (await import(`../../../locales/${locale}.json`)).default,
  };
});
