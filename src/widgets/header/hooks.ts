"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { SPACE_SIZE, PADDING, GAP, PROPERTY_NAME } from "./config";

interface UseHeaderScroll {
  hasScrolled: boolean;
  headerRef: React.RefObject<HTMLElement | null>;
  navRef: React.RefObject<HTMLElement | null>;
}

export const useHeaderScroll = (): UseHeaderScroll => {
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);

  const [headerRef, navRef] = [
    useRef<HTMLElement>(null),
    useRef<HTMLElement>(null),
  ];

  useEffect(() => {
    if (!headerRef.current || !navRef.current) {
      return;
    }

    const [headerElement, navElement] = [headerRef.current, navRef.current];

    const calculateNavWidth = (isScrolled: boolean): string => {
      if (!isScrolled) return "100%";

      const elementsWidth = Array.from(navElement.children)
        .filter((child): child is HTMLElement => child instanceof HTMLElement)
        .reduce(
          (width, child) => width + child.getBoundingClientRect().width,
          PADDING + GAP
        );

      return `${elementsWidth}px`;
    };

    const onScroll = () => {
      const isScrolled = window.scrollY >= SPACE_SIZE;
      if (hasScrolled && isScrolled) return;

      headerElement.style.setProperty(
        PROPERTY_NAME,
        calculateNavWidth(isScrolled)
      );
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return { headerRef, navRef, hasScrolled };
};
