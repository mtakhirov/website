import type { ComponentPropsWithoutRef } from "react";
import { ExternalLink as ExternalLinkIcon } from "pixelarticons/react/ExternalLink";
import { cn } from "#utils";

export function ExternalLink({ className, children, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`
        inline-flex items-center gap-0.5 underline decoration-1
        underline-offset-4
        hover:bg-fg hover:text-bg hover:no-underline
      `, className)}
      {...props}
    >
      {children}
      <ExternalLinkIcon className={cn("size-3.5 crisp")} aria-hidden />
    </a>
  );
}
