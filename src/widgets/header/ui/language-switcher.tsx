"use client";

import type { Locale } from "#features/i18n";
import type React from "react";

import { locales, setUserLocale } from "#features/i18n";
import { Select } from "#shared/ui";
import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { startTransition } from "react";

export const LanguageSwitcher: React.FC = () => {
  const t = useTranslations("Widgets.Header");
  const locale = useLocale() as Locale;

  const onLocaleChange = (locale: Locale) => {
    if (!locales.includes(locale)) {
      return;
    }

    startTransition(() => setUserLocale(locale));
  };

  return (
    <Select.Root value={locale} onValueChange={onLocaleChange}>
      <Select.Trigger
        variant="ghost"
        size="icon"
        className="hidden md:inline-flex"
      >
        <LanguagesIcon />
      </Select.Trigger>
      <Select.Content>
        {locales.map(locale => (
          <Select.Item key={`locale-${locale}`} value={locale}>
            {t("locale", { locale })}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};
LanguageSwitcher.displayName = "Language switcher component";
