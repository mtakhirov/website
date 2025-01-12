"use client";

import type React from "react";

import { Button } from "#shared/ui";
import { IconHamburger } from "#shared/ui/icons";
import { cn } from "#shared/utils";
// Configs
import { LINKS } from "#widgets/header/config";

import { useHeaderScroll } from "#widgets/header/hook";
import { useTranslations } from "next-intl";

import Link from "next/link";
import { createContext, useEffect, useState } from "react";

import { LanguageSwitcher, MobileMenu } from "./ui";

interface HeaderContextProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;

  hasScrolled: boolean;
}

export const HeaderContext = createContext<HeaderContextProps | null>(null);

/**
 * HeaderWidget component renders the header section of the website.
 * It includes navigation links, a language switcher, and a hamburger menu for mobile view.
 */
export const HeaderWidget: React.FC = () => {
  const t = useTranslations("Widgets.Header");
  const { headerRef, navRef, hasScrolled } = useHeaderScroll();

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (mobileMenuOpen) {
      document.body.style.pointerEvents = "none";
      document.body.setAttribute("data-scroll-locked", "true");
    } else {
      document.body.style.pointerEvents = "";
      document.body.removeAttribute("data-scroll-locked");
    }
  }, [mobileMenuOpen]);

  return (
    <HeaderContext value={{ hasScrolled, mobileMenuOpen, setMobileMenuOpen }}>
      <header
        ref={headerRef}
        data-scrolled={hasScrolled}
        data-mobile-menu-open={mobileMenuOpen}
        className="group container pointer-events-auto sticky top-4 z-50 my-4"
      >
        <nav
          ref={navRef}
          className={cn([
            "mx-auto flex w-full items-center justify-between gap-4 rounded-full bg-black/60 py-1.5 text-sm duration-300 md:py-2",
            "w-full backdrop-blur-sm transition-all group-data-[scrolled=true]:px-2 md:w-[var(--header-nav-width)] group-data-[scrolled=true]:md:px-3",
            "group-data-[mobile-menu-open=true]:w-full group-data-[mobile-menu-open=true]:bg-black/0 group-data-[mobile-menu-open=true]:px-2 group-data-[mobile-menu-open=true]:md:px-3",
          ])}
        >
          <div className="flex items-center gap-2">
            <Link
              href="/"
              data-underline
              onClick={() => setMobileMenuOpen(false)}
            >
              {/* <h3>{APP_NAME}</h3> */}
              <h3>~/tkhrv</h3>
            </Link>

            <span className="hidden select-none text-white/35 md:inline-block">
              #
            </span>

            <div className="hidden items-center gap-4 md:flex">
              {LINKS.map((link, index) => (
                <Link key={`${link}-${index}`} href={`/${link}`}>
                  {t(`links.${link}`)}
                </Link>
              ))}
            </div>
          </div>

          <span className="inline-block select-none text-white/35 opacity-0 transition-opacity group-data-[mobile-menu-open=true]:opacity-0 group-data-[scrolled=true]:md:opacity-100">
            /
          </span>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            <Button
              size="icon"
              variant="ghost"
              className="inline-flex md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <IconHamburger />
            </Button>

            <MobileMenu />
          </div>
        </nav>
      </header>
    </HeaderContext>
  );
};
