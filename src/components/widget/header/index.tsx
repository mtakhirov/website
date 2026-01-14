"use client";

import { IconMenu2 } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { HEADER_LINKS } from "#app/config";
import { Button } from "#components/ui/button";
import { cn } from "#utils";

import { useHeaderScroll } from "./hooks";

const BLUR_LAYERS = [
  { blur: "0.25px", mask: "62.5%, 75%, 87.5%, 100%" },
  { blur: "0.5px", mask: "50%, 62.5%, 75%, 87.5%" },
  { blur: "1px", mask: "37.5%, 50%, 62.5%, 75%" },
  { blur: "2px", mask: "25%, 37.5%, 50%, 62.5%" },
  { blur: "4px", mask: "12.5%, 25%, 37.5%, 50%" },
  { blur: "8px", mask: "0%, 12.5%, 25%, 37.5%" },
  { blur: "16px", mask: "0%, 0%, 12.5%, 25%" },
  { blur: "32px", mask: "0%, 0%, 0%, 12.5%" },
];

function Header() {
  const pathname = usePathname();
  const scrolled = useHeaderScroll();

  return (
    <motion.header
      layoutRoot
      data-scrolled={scrolled}
      className={cn([
        `group sticky top-0 z-50 py-4`,
      ])}
    >
      {/* Smooth Backdrop Blur */}
      <div
        className={cn([
          `
            pointer-events-none absolute inset-x-0 -top-4 -bottom-4 -z-1
            overflow-hidden transition-opacity duration-200
            group-data-[scrolled=false]:opacity-0
          `,
        ])}
      >
        {BLUR_LAYERS.map((layer, i) => (
          <div
            key={i}
            className="absolute inset-x-0 -top-4 bottom-0"
            style={{
              zIndex: i + 1,
              backdropFilter: `blur(${layer.blur})`,
              maskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[0]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[1]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[2]}, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[3]})`,
              WebkitMaskImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[0]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[1]}, rgba(0, 0, 0, 1) ${layer.mask.split(", ")[2]}, rgba(0, 0, 0, 0) ${layer.mask.split(", ")[3]})`,
            }}
          />
        ))}
        <div
          className={cn([
            `
              absolute inset-x-0 -top-4 bottom-0 bg-linear-to-b from-background
              from-25% to-background/0
            `,
          ])}
          style={{
            zIndex: BLUR_LAYERS.length + 1,
          }}
        />
      </div>

      <nav
        className={cn([
          `
            container mx-auto flex h-12 items-center justify-between gap-1.5
            rounded-full text-sm duration-300
          `,
        ])}
      >
        <div className={cn([
          "flex items-center gap-2",
          `h-9 rounded-4xl px-4 outline-none`,
          `border border-border bg-input/30 bg-clip-padding`,
        ])}
        >
          <Link
            href="/"
            className={cn(`
              relative h-7.5 content-center text-muted-foreground
              underline-offset-3 transition-colors
              hover:text-primary hover:underline
            `)}
            data-underline
          >
            {pathname === "/" && (
              <motion.span
                layoutId="header-active-link"
                animate={{ opacity: 0 }}
                initial={false}
                className={cn([
                  `
                    absolute inset-0 rounded-full border border-border
                    bg-primary-foreground/75 opacity-0
                  `,
                ])}
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <h3>~/tkhrv</h3>
          </Link>

          <span className={cn([`hidden text-muted select-none md:inline-block`])}>
            #
          </span>

          <div className={cn([`hidden items-center gap-1.5 md:flex`])}>
            {HEADER_LINKS.map((link, index) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href);

              return (
                <Link
                  key={`${link.label}-${index}`}
                  href={link.href}
                  className={cn([
                    `
                      relative h-7.5 content-center rounded-full px-2
                      transition-colors
                    `,
                    isActive
                      ? "text-primary"
                      : `text-muted-foreground hover:text-primary`,
                  ])}
                >
                  {isActive && (
                    <motion.span
                      layoutId="header-active-link"
                      className={cn`
                        absolute inset-0 rounded-full border border-border
                        bg-primary-foreground/75
                      `}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            size="icon"
            variant="outline"
          >
            <IconMenu2 />
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}

export default Header;
export { Header };
