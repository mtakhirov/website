import type { ComponentPropsWithoutRef } from "react";
import { type DitherOptions, ditherPath } from "#lib/dither";
import { cn } from "#utils";

type DitherProps = Omit<ComponentPropsWithoutRef<"svg">, "seed"> & DitherOptions;

/**
 * Server-rendered generative dither block. One <path>, `currentColor` fill,
 * so it recolors with the theme for free.
 */
export function Dither({ cols, rows, seed, field, noise, invert, density, center, className, ...props }: DitherProps) {
  const d = ditherPath({ cols, rows, seed, field, noise, invert, density, center });
  return (
    <svg
      viewBox={`0 0 ${cols} ${rows}`}
      preserveAspectRatio="none"
      shapeRendering="crispEdges"
      aria-hidden
      className={cn("block size-full", className)}
      {...props}
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
}
