"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Locale, localeNames, locales, route } from "#i18n";
import { cn } from "#utils";

interface LangSwitchProps {
  current: Locale;
  label: string;
}

/** Swaps the leading locale segment of the current path. Remembers the choice in a cookie for the `/` redirect. */
export function LangSwitch({ current, label }: LangSwitchProps) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(uz|en)(?=\/|$)/, "");

  return (
    <nav aria-label={label} className={cn("flex border border-border bg-surface")}>
      {locales.map(lang => (
        <Link
          key={lang}
          href={route(lang, rest)}
          hrefLang={lang}
          lang={lang}
          aria-current={lang === current ? "true" : undefined}
          title={localeNames[lang]}
          onClick={() => {
            document.cookie = `lang=${lang}; path=/; max-age=31536000; samesite=lax`;
          }}
          className={cn(
            "flex h-8 items-center px-2 text-xs font-bold uppercase",
            lang === current ? "bg-fg text-bg" : "text-muted hover:text-fg",
          )}
        >
          {lang}
        </Link>
      ))}
    </nav>
  );
}
