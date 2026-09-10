import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "#utils";

type Variant = "line" | "fg" | "accent" | "fg-2" | "accent-2";

const VARIANTS: Record<Variant, string> = {
  "line": "pixel-border-line",
  "fg": "pixel-border",
  "accent": "pixel-border-accent",
  "fg-2": "pixel-border-2",
  "accent-2": "pixel-border-2-accent",
};

type PixelBoxProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Bordered container with pixel-rounded corners (border-image nine-slice). */
export function PixelBox<T extends ElementType = "div">({ as, variant = "line", className, ...props }: PixelBoxProps<T>) {
  const Tag = (as ?? "div") as ElementType;
  return <Tag className={cn("bg-surface", VARIANTS[variant], className)} {...props} />;
}
