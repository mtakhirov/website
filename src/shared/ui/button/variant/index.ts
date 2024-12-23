import { cva } from "cva";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
    "transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white",
    "disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-white text-black shadow hover:bg-white/90",
        secondary: "bg-black text-white hover:bg-black/90",
        outline:
          "border border-white bg-white/0 text-white hover:border-white/90 hover:bg-white/35",
        ghost:
          "bg-white/0 text-white hover:bg-white/10 focus-visible:ring-white/10",
      },
      size: {
        default: "px-4 py-3",
        sm: "px-3.5 py-2 text-xs",
        lg: "rounded-lg px-8 py-3",
        icon: "aspect-square size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);
