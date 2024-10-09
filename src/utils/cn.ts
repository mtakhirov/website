import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: ClassValue[]): string => {
  return twMerge(clsx(classNames));
};

export default cn;
