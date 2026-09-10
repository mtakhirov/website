"use client";

import { useTheme } from "next-themes";
import { Moon } from "pixelarticons/react/Moon";
import { Sun } from "pixelarticons/react/Sun";
import { useSyncExternalStore } from "react";
import { cn } from "#utils";

const subscribe = () => () => {};

interface ThemeToggleProps {
  label: string;
}

export function ThemeToggle({ label }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme is unknown during SSR; render a neutral box until mounted.
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const dark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(`
        flex size-8 items-center justify-center border border-border bg-surface
        text-fg
        hover:bg-fg hover:text-bg
        active:translate-y-px
      `)}
    >
      {mounted
        ? (dark
            ? <Sun className={cn("size-4 crisp")} aria-hidden />
            : (
                <Moon
                  className={cn("size-4 crisp")}
                  aria-hidden
                />
              ))
        : (
            <span className={cn("size-4")} />
          )}
    </button>
  );
}
