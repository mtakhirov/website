import { cva } from "cva";

export const triggerVariant = cva(
  [
    "flex items-center justify-between whitespace-nowrap rounded-md text-sm shadow-sm transition-colors duration-300",
    "placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white disabled:cursor-not-allowed disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default: "border border-white bg-white/0 ring-offset-white",
        ghost:
          "bg-white/0 text-white hover:bg-white/10 focus-visible:ring-white/10",
      },
      size: {
        default: "w-full px-3 py-2 [&>span]:line-clamp-1",
        icon: "aspect-square size-9 justify-center [&_svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);
