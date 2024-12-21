"use client";

import type React from "react";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "#shared/utils";
import { BarsIcon } from "#shared/ui/icons";
import { useHeaderScroll } from "./hooks";

// Configs
import { APP_NAME } from "@/app/config";
import { LINKS } from "./config";

export default (): React.ReactElement => {
  const t = useTranslations("Widgets.Header");
  const { headerRef, navRef, hasScrolled } = useHeaderScroll();

  return (
    <header
      ref={headerRef}
      data-scrolled={hasScrolled}
      className={cn([
        "group container flex sticky justify-center top-0 my-4",
        "data-[scrolled=true]:top-4 transition-[top]",
      ])}
    >
      <nav
        ref={navRef}
        className={cn([
          "w-full bg-black/0 flex items-center justify-between backdrop-filter",
          "max-w-[var(--header-nav-width,_100%)] py-2.5 px-0 gap-2 md:gap-4 rounded-full",
          "group-data-[scrolled=true]:bg-black/60 group-data-[scrolled=true]:backdrop-blur-sm",
          "transition-all duration-300 group-data-[scrolled=true]:px-4",
        ])}
      >
        <Link href="/" className="hover:underline underline-offset-2">
          <h3>{APP_NAME}</h3>
        </Link>

        <span className="w-px h-full bg-gray-400 opacity-0 group-data-[scrolled=true]:opacity-100" />

        <div className="hidden md:flex items-center gap-4">
          {LINKS.map((link) => (
            <Link key={link} href={`/${link}`}>
              {t(`links.${link}`)}
            </Link>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-4">
          <BarsIcon />
        </div>
      </nav>
    </header>
  );
};
