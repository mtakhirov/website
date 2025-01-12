"use client";

import type React from "react";

import { cn } from "#shared/utils";
import { LINKS } from "#widgets/header";
import { HeaderContext } from "#widgets/header/widget";

import * as Portal from "@radix-ui/react-portal";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { use } from "react";

import { RemoveScroll } from "react-remove-scroll";

export const MobileMenu: React.FC = () => {
  const context = use(HeaderContext);
  const t = useTranslations("Widgets.Header.links");

  // if (!open) return null;
  if (!context)
    return null;

  return (
    <Portal.Root key="mobile-menu" asChild>
      <RemoveScroll
        as="section"
        enabled={context.mobileMenuOpen}
        data-scrolled={context.hasScrolled}
        data-open={context.mobileMenuOpen}
        className={cn([
          "group fixed inset-0 z-40 bg-black/75 backdrop-blur",
          "pointer-events-none opacity-0 transition duration-300",
          "data-[open=true]:pointer-events-auto data-[open=true]:opacity-100",
        ])}
      >
        <div className={cn("container mt-[calc(60px_+_(16px_*_2))]")}>
          <div
            className={cn(
              "px-0 transition-all duration-300 md:px-0",
              "group-data-[scrolled=true]:px-2 group-data-[scrolled=true]:md:px-3",
              "group-data-[open=true]:px-2 group-data-[open=true]:md:px-3",
            )}
            style={{ transitionDelay: "20ms" }}
          >
            <div className="flex flex-col justify-center gap-4">
              {LINKS.map((link, index) => (
                <Link
                  key={`${link}-${index}-mobile`}
                  href={`/${link}`}
                  onClick={() => context?.setMobileMenuOpen(false)}
                >
                  {t(link)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </RemoveScroll>
    </Portal.Root>
  );
};
