"use client";

import type { Heading } from "#types";
import { useEffect, useState } from "react";
import { cn } from "#utils";

interface TocProps {
  headings: Heading[];
  label: string;
}

export function Toc({ headings, label }: TocProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = headings
      .map(heading => document.getElementById(heading.id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0]!.target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: [0, 1] },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav aria-label={label} className={cn("text-sm")}>
      <p className={cn("mb-3 font-pixel text-base")}>{label}</p>
      <ul className={cn("border-l border-line")}>
        {headings.map(heading => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                `
                  -ml-px block border-l-2 py-1 pr-2 leading-snug
                  transition-colors
                `,
                heading.level === 3 && "pl-6",
                heading.level === 4 && "pl-9",
                heading.level === 2 && "pl-3",
                activeId === heading.id
                  ? "border-accent text-fg"
                  : `border-transparent text-muted hover:text-fg`,
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
