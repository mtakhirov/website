import type React from "react";
import type { VariantProps } from "class-variance-authority";
import type { buttonVariants } from "#components/shared/Button/variants";

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps<T extends HTMLElement = HTMLElement>
  extends ButtonVariants,
    React.HTMLAttributes<T> {
  className?: string;
  as?: "button" | "div" | "a";

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
