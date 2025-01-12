"use client";

import type React from "react";

import {
  GAP,
  PADDING,
  PROPERTY_NAME,
  SPACE_SIZE,
} from "#widgets/header/config";
import { useCallback, useEffect, useRef, useState } from "react";

interface UseHeaderScroll {
  hasScrolled: boolean;
  headerRef: React.RefObject<HTMLElement | null>;
  navRef: React.RefObject<HTMLElement | null>;
}

export function useHeaderScroll(): UseHeaderScroll {
  const [hasScrolled, setHasScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const calculateNavWidth = useCallback((isScrolled: boolean): string => {
    if (!isScrolled || !navRef.current)
      return "100%";

    const elementsWidth = Array.from(navRef.current.children)
      .filter((child): child is HTMLElement => child instanceof HTMLElement)
      .reduce(
        (width, child) => width + child.getBoundingClientRect().width,
        PADDING + GAP,
      );

    return `${elementsWidth}px`;
  }, []);

  const onScroll = useCallback(() => {
    if (!headerRef.current)
      return;

    const isScrolled = window.scrollY >= SPACE_SIZE;
    if (hasScrolled && isScrolled)
      return;

    headerRef.current.style.setProperty(
      PROPERTY_NAME,
      calculateNavWidth(isScrolled),
    );
    setHasScrolled(isScrolled);
  }, [hasScrolled, calculateNavWidth]);

  useEffect(() => {
    onScroll(); // Initial trigger

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return { headerRef, navRef, hasScrolled };
}
