import type React from "react";
import type { ButtonProps } from "#shared/ui/button";

import { cn } from "#shared/utils";
import { buttonVariants } from "#shared/ui/button";

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, size, mode, className, ...restProps } = props;

  const variants = buttonVariants({ variant, size, mode, className });
  const classNames = cn(variants, className);

  return <button className={classNames} {...restProps} />;
};
Button.displayName = "Button component";
