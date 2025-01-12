import type { VariantProps } from "cva";
import type React from "react";

import type { buttonVariants } from "./variant";

export { Button } from "./component";
export { buttonVariants } from "./variant";

export type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  React.RefAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;
