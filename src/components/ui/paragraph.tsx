import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "#utils";

const paragraphVariants = cva(`font-light text-foreground [&_b]:font-semibold`, {
  variants: {
    variant: {
      default: "font-sans",
      sans: `font-sans`,
      mono: `font-mono`,
    },
    size: {
      default: "text-sm leading-relaxed md:text-base",
      sm: "text-sm leading-relaxed md:text-base [&_b]:font-semibold",
      xs: "text-xs leading-snug md:text-sm [&_b]:font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

function Paragraph({ className, variant, size, ...props }: React.ComponentProps<"p"> & VariantProps<typeof paragraphVariants>) {
  return (
    <p
      data-slot="paragraph"
      className={cn(paragraphVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Paragraph, paragraphVariants };
