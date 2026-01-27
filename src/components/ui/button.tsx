"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "#utils";
import { type ButtonVariantProps, buttonVariants } from "./button-variants";

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & ButtonVariantProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button };
export { buttonVariants } from "./button-variants";
