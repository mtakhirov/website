"use client";

import type React from "react";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "#shared/utils";
import { IconHamburger } from "#shared/ui/icons";
import { useHeaderScroll } from "#widgets/header/hook";

// Configs
import { APP_NAME } from "@/app/config";
import { LINKS } from "#widgets/header/config";

export const HeaderWidget: React.FC = () => {
  const t = useTranslations("Widgets.Header");
  const { headerRef, navRef, hasScrolled } = useHeaderScroll();

  return (
    <header
      ref={headerRef}
      data-scrolled={hasScrolled}
      className={cn([
        "group container sticky top-0 my-4 flex justify-center",
        "transition-[top] data-[scrolled=true]:top-4",
      ])}
    >
      <nav
        ref={navRef}
        className={cn([
          "flex w-full items-center justify-between bg-black/0",
          "max-w-[var(--header-nav-width,_100%)] gap-2 rounded-full px-0 py-2.5 md:gap-4",
          "group-data-[scrolled=true]:bg-black/60 group-data-[scrolled=true]:backdrop-blur-sm",
          "transition-all duration-300 group-data-[scrolled=true]:px-4",
        ])}
      >
        <Link href="/" data-underline>
          <h3>{APP_NAME}</h3>
        </Link>

        <span className="h-full w-px bg-white/20 opacity-0 group-data-[scrolled=true]:opacity-100" />

        <div className="hidden items-center gap-4 md:flex">
          {LINKS.map((link) => (
            <Link key={link} href={`/${link}`}>
              {t(`links.${link}`)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <IconHamburger />
        </div>
      </nav>
    </header>
  );
};
