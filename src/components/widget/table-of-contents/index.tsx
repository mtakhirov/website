"use client";

import { IconList, IconX } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "#components/ui/sheet";
import { cn } from "#utils";

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: TOCHeading[];
  className?: string;
}

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const { activeId, progress } = useScrollSpy(headings);

  if (headings.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {/* Desktop/Laptop: Fixed, adaptive sidebar on the right */}
      <motion.aside
        className={cn(
          [
            // Hidden on mobile; appears from lg upwards
            "pointer-events-none fixed top-24 right-4 z-40 hidden md:block",
            // Give the container room to breathe on smaller viewports
            // and avoid stealing too much horizontal space.
            // The inner card handles scrolling & max-height.
          ].join(" "),
          className,
        )}
        initial={{ opacity: 0, x: "calc(100% + 32px)" }}
        animate={{ opacity: 1, x: activeId ? 0 : "calc(100% + 32px)" }}
        exit={{ opacity: 0, x: "calc(100% + 32px)" }}
        transition={{ duration: 0.1, when: "afterChildren", damping: 20, stiffness: 250, type: "spring" }}
      >
        <div
          className={`
            pointer-events-auto max-h-[calc(100vh-8rem)]
            w-[min(18rem,calc(100vw-4rem))] overflow-y-auto rounded-xl border
            border-white/10 bg-zinc-950/80 p-4
            shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-md
          `}
        >
          <h2
            className={`
              mb-3 text-[0.7rem] font-semibold tracking-[0.18em] text-white/45
              uppercase
            `}
          >
            On this page
          </h2>
          <TOCContent
            headings={headings}
            activeId={activeId}
            progress={progress}
          />
        </div>
      </motion.aside>

      {/* Mobile: Sheet trigger */}
      <div className="fixed right-6 bottom-6 z-40 md:hidden">
        <Sheet>
          <SheetTrigger
            className={cn(
              "flex size-12 items-center justify-center rounded-full",
              "bg-white/10 backdrop-blur-md",
              "border border-white/10",
              "text-white shadow-lg",
              "transition-transform hover:scale-105 active:scale-95",
            )}
          >
            <IconList className="size-5" />
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <div className="flex items-center justify-between">
                <SheetTitle>Table of Contents</SheetTitle>
                {/* <SheetClose>
                  <IconX className="size-5" />
                  <span className="sr-only">Close</span>
                </SheetClose> */}
              </div>
            </SheetHeader>
            <div className="mt-4">
              <TOCContent
                headings={headings}
                activeId={activeId}
                progress={progress}
                onItemClick={() => {
                  // Sheet will close automatically via the link click
                }}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </React.Fragment>
  );
}

interface TOCContentProps {
  headings: TOCHeading[];
  activeId: string | null;
  progress: number;
  onItemClick?: () => void;
}

function TOCContent({ headings, activeId, progress, onItemClick }: TOCContentProps) {
  return (
    <nav className="relative">
      {/* Progress bar (subtle vertical accent on the left) */}
      <div
        className={`
          pointer-events-none absolute inset-y-1 left-0 w-px overflow-hidden
          rounded-full bg-white/5
        `}
        aria-hidden="true"
      >
        <motion.div
          className={`
            w-full bg-gradient-to-b from-indigo-500 via-sky-400 to-purple-500
          `}
          style={{ height: `${progress}%` }}
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.15 }}
        />
      </div>

      {/* Heading list */}
      <ul className="space-y-0.5 pl-4">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const levelOffset = Math.max(0, heading.level - 2);
          const indent = levelOffset * 12;

          return (
            <li key={heading.id} style={{ paddingLeft: indent }}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(heading.id);
                  if (element) {
                    const offset = 96; // Account for fixed header
                    const top = element.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                  onItemClick?.();
                }}
                className={cn(
                  `
                    group relative block py-1.5 text-xs transition-colors
                    md:text-sm
                  `,
                  "hover:text-white/80",
                  isActive ? "text-white" : "text-white/50",
                )}
              >
                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="toc-active-indicator"
                    className={`
                      absolute top-1/2 -left-4 size-2 -translate-y-1/2
                      rounded-full bg-indigo-500
                    `}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  />
                )}

                <span className="line-clamp-2">{heading.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function useScrollSpy(headings: TOCHeading[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (headings.length === 0) return;

    const handleScroll = () => {
      // Calculate overall progress
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, scrollProgress)));

      // Find active heading
      const headingElements = headings
        .map(h => document.getElementById(h.id))
        .filter((el): el is HTMLElement => el !== null);

      if (headingElements.length === 0) return;

      const offset = 120; // Offset from top to consider "active"

      // Find the heading that's currently in view
      let currentId: string | null = null;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        const rect = element.getBoundingClientRect();

        if (rect.top <= offset) {
          currentId = element.id;
          break;
        }
      }

      // // If no heading is above the offset, use the first one if we're at the top
      // if (!currentId && scrollTop < 100 && headingElements.length > 0) {
      //   currentId = headingElements[0].id;
      // }

      setActiveId(currentId);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return { activeId, progress };
}
