import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tw-merge";

export function cn(...classes: ClassValue[]): string {
  return twMerge(clsx(classes));
}
