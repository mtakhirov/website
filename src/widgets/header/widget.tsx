"use client";

import type React from "react";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "#shared/utils";
import { IconHamburger } from "#shared/ui/icons";
import { useHeaderScroll } from "#widgets/header/hook";
import { Button } from "#shared/ui";
import { LanguageSwitcher } from "./ui";

// Configs
// import { APP_NAME } from "@/app/config";
import { LINKS } from "#widgets/header/config";

export const HeaderWidget: React.FC = () => {
  const t = useTranslations("Widgets.Header");
  const { headerRef, navRef, hasScrolled } = useHeaderScroll();

  return (
    <header
      ref={headerRef}
      data-scrolled={hasScrolled}
      className="group container sticky top-4 my-4"
    >
      <nav
        ref={navRef}
        className={cn([
          "flex w-full items-center justify-between gap-4 rounded-full bg-black/60 py-2 text-sm duration-300 md:py-3",
          "backdrop-blur-sm transition-all group-data-[scrolled=true]:px-3 group-data-[scrolled=true]:md:px-4",
        ])}
      >
        <div className="flex items-center gap-2">
          <Link href="/" data-underline>
            {/* <h3>{APP_NAME}</h3> */}
            <h3>{`~/tkhrv`}</h3>
          </Link>

          {/* <span className="hidden text-white/35 md:inline-block">{`</>`}</span> */}
          <span className="hidden text-white/35 md:inline-block">{`#`}</span>

          <div className="hidden items-center gap-4 md:flex">
            {LINKS.map((link) => (
              <Link key={link} href={`/${link}`}>
                {t(`links.${link}`)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <Button size="icon" variant="ghost" className="inline-flex md:hidden">
            <IconHamburger />
          </Button>
        </div>
      </nav>
    </header>
  );
};
