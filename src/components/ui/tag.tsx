import type { ComponentPropsWithoutRef } from "react";
import { cn } from "#utils";

/** Small monospace label. Used for tags, stacks, years. */
export function Tag({ className, ...props }: ComponentPropsWithoutRef<"span">) {
  return (
    <span
      className={cn(`
        inline-block border border-border bg-surface px-1.5 py-px text-xs
        text-muted
      `, className)}
      {...props}
    />
  );
}
