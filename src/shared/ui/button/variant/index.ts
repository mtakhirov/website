import { cva } from "cva";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium",
    "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
    "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-white text-black",
        outline: "border border-white bg-black/0",
      },
      mode: {
        square: "rounded-lg",
        rounded: "rounded-full",
      },
      size: {
        lg: "px-6 py-4 text-lg",
        md: "px-4 py-2.5 text-base",
        sm: "px-3.5 py-2 text-sm",
        xs: "px-2.5 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      mode: "rounded",
      size: "md",
    },
  },
);
