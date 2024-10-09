import { type VariantProps, cva } from "class-variance-authority";

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center text-center",
    "outline-none border-0 ring-0 space-x-1.5",
  ],
  {
    variants: {
      theme: {
        primary: "bg-black dark:bg-white text-white dark:text-black",
        secondary: "bg-transparent border border-black dark:border-white",
      },
      mode: {
        square: "rounded-lg",
        rounded: "rounded-full",
      },
      size: {
        lg: "py-4 px-6 text-lg",
        md: "py-2.5 px-4 text-base",
        sm: "py-2 px-3.5 text-sm",
        xs: "py-1 px-2.5 text-xs",
      },
    },
    defaultVariants: {
      theme: "primary",
      mode: "rounded",
      size: "md",
    },
  },
);
