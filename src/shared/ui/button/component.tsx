import type { ButtonProps } from "#shared/ui/button";
import type React from "react";

import { buttonVariants } from "#shared/ui/button";
import { cn } from "#shared/utils";

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant, size, className, ...restProps } = props;

  const variants = buttonVariants({ variant, size, className });
  const classNames = cn(variants, className);

  return <button className={classNames} {...restProps} />;
};
Button.displayName = "Button component";
