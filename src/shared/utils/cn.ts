import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: ClassValue[]): string {
  return twMerge(clsx(classNames));
}
