"use client";

import { IconMenu2, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { HEADER_LINKS } from "#app/config";
import { Button } from "#components/ui/button";
import { cn } from "#utils";
import NavigationBubble from "./ui/navigation-bubble";
import NavigationContent from "./ui/navigation-content";
import NavigationItem from "./ui/navigation-item";
import SmoothBackdrop from "./ui/smooth-backdrop";

function Header() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const toggle = () => setOpen(prev => !prev);
  const close = () => setOpen(false);

  return (
    <header className={cn`group sticky top-0 z-50 py-4`}>
      <SmoothBackdrop />

      <nav
        id="navigation-menu"
        className={cn`container flex h-12 items-center justify-between text-sm`}
      >
        <div id="navigation-content" className={cn`flex h-9 items-center gap-2`}>
          <NavigationContent
            id="navigation-logo"
            className="anchor/navigation-logo"
          >
            <NavigationItem href="/">~/tkhrv</NavigationItem>
          </NavigationContent>

          {/* Desktop / tablet inline links */}
          <NavigationContent
            id="navigation-list"
            className={cn(`hidden anchor/navigation-list sm:flex`)}
          >
            {HEADER_LINKS.map(link => (
              <NavigationItem
                key={`${link.label}-${link.href}`}
                href={link.href}
                className={cn`
                  before:absolute before:inset-0
                  hover:before:anchor/navigation-list
                `}
              >
                {link.label}
              </NavigationItem>
            ))}
          </NavigationContent>
        </div>

        {/* Navigation trigger */}
        <Button
          id="navigation-button"
          size="icon"
          variant="outline"
          aria-label={open ? "Yopish" : "Navigatsiyani ochish"}
          aria-expanded={open}
          aria-controls="navigation-mobile-menu"
          className={cn`
            group/button inline-flex shrink-0 cursor-pointer items-center
            justify-center rounded-4xl border border-accent bg-accent/60
            text-muted-foreground outline-none
            hover:bg-accent/70 hover:text-accent-foreground
          `}
          onClick={toggle}
        >
          <AnimatePresence initial={false} mode="wait">
            {open
              ? (
                  <motion.span
                    key="close-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconX className="size-5" />
                  </motion.span>
                )
              : (
                  <motion.span
                    key="menu-icon"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.18 }}
                  >
                    <IconMenu2 className="size-5" />
                  </motion.span>
                )}
          </AnimatePresence>
        </Button>
      </nav>

      {/* Mobile bottom sheet menu (xs / sm) */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="navigation-mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className={cn`
              fixed inset-x-0 top-16 z-40 border-b border-border/60
              bg-background/95 backdrop-blur-xl
              sm:hidden
            `}
          >
            <div className="container py-3">
              <nav className="flex flex-col gap-1.5">
                {HEADER_LINKS.map((link) => {
                  const isActive = link.href === "/" ? pathname === "/" : pathname?.startsWith(link.href);

                  return (
                    <Link
                      key={`${link.label}-${link.href}-mobile`}
                      href={link.href}
                      onClick={close}
                      className={cn(
                        `
                          inline-flex items-center justify-between rounded-xl
                          px-3 py-2 text-sm transition-colors
                        `,
                        isActive
                          ? "bg-accent/60 text-accent-foreground"
                          : "text-muted-foreground",
                      )}
                    >
                      <span className="font-medium">{link.label}</span>
                      <span className="text-xs text-muted-foreground/70">
                        {link.href}
                      </span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tablet / desktop feature aside (md and up) */}
      <AnimatePresence>
        {open && (
          <motion.aside
            key="header-feature-aside"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn`
              pointer-events-auto fixed top-20 right-4 z-40 hidden
              w-[min(22rem,calc(100vw-2rem))]
              md:block
            `}
          >
            <div
              className={cn(`
                rounded-2xl border border-white/10 bg-zinc-950/90 p-4
                shadow-[0_18px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl
              `)}
            >
              <p className={`
                font-mono text-[11px] tracking-[0.18em] text-orange-300/80
                uppercase
              `}
              >
                Feature: Navigation
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Bu header menyu hozircha
                {" "}
                <span className="text-orange-400">eksperimental</span>
                {" "}
                bo&apos;lim. Turli ekran o&apos;lchamlarida qanday ishlashini sinab
                ko&apos;ryapman: mobil qurilmalarda to&apos;liq menyu, katta
                ekranlarda esa kontekstli yon panel.
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <NavigationBubble />
    </header>
  );
}

export default Header;
export { Header };
