import type React from "react";
import type { ButtonProps } from "./types";

import { cn } from "#shared/utils";
import { buttonVariants } from "./variant";

export const Button: React.FC<ButtonProps> = (props) => {
  const { theme, size, mode, className, ...restProps } = props;

  const variants = buttonVariants({ theme, size, mode, className });
  const classNames = cn(variants, className);

  return <button className={classNames} {...restProps} />;
};
Button.displayName = "Button component";
