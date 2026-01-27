import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "#utils";

type HeadingSlots = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps = React.ComponentProps<HeadingSlots> & VariantProps<typeof headingVariants> & {
  as?: HeadingSlots;
};

const headingVariants = cva(``, {
  variants: {
    variant: {
      default: "font-sans",
      sans: "font-sans",
      mono: "font-mono",
    },
    size: {
      h1: "text-2xl font-bold md:text-4xl",
      h2: "text-lg font-semibold md:text-xl",
      h3: "text-sm font-medium md:text-base",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "h1",
  },
});

function Heading({ as, className, variant, size, ...props }: HeadingProps) {
  let Slot: HeadingSlots = "h1";

  if (size && size !== null) {
    Slot = size;
  }

  if (as && as !== undefined) {
    Slot = as;
  }

  return (
    <Slot
      data-slot="heading"
      className={cn(headingVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Heading, headingVariants };
