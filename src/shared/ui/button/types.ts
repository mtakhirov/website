import type React from "react";
import type { VariantProps } from "cva";
import { buttonVariants } from "./variant";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
