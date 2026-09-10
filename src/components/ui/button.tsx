import type { VariantProps } from "class-variance-authority";
import type { ComponentPropsWithoutRef } from "react";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { cn } from "#utils";

export const buttonVariants = cva(
  `
    inline-flex items-center justify-center gap-2 font-pixel text-base
    whitespace-nowrap transition-[transform,box-shadow] duration-100 select-none
    active:translate-px active:shadow-none
    disabled:pointer-events-none disabled:opacity-50
  `,
  {
    variants: {
      variant: {
        primary: `bg-accent text-accent-fg hover:shadow-pixel`,
        secondary: `bg-surface text-fg pixel-border hover:shadow-pixel`,
        ghost: `
          text-fg underline decoration-1 underline-offset-4
          hover:bg-fg hover:text-bg hover:no-underline
        `,
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-12 px-6 text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ComponentPropsWithoutRef<"button"> & ButtonVariants) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonLink({ className, variant, size, ...props }: ComponentPropsWithoutRef<typeof Link> & ButtonVariants) {
  return <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export function ButtonAnchor({ className, variant, size, ...props }: ComponentPropsWithoutRef<"a"> & ButtonVariants) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
