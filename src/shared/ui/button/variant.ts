import { cva } from "cva";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium",
    "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
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
  }
);
