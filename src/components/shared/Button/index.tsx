import type { FC } from "react";
import type { ButtonProps } from "#components/shared/Button/types";

import { memo } from "react";
import { buttonVariants } from "#components/shared/Button/variants";
import { cn } from "#utils";
import { updateProps } from "@/utils/update-props";

export const Button: FC<ButtonProps> = ({
  as = "button",
  children,
  className,
  // Icons1
  leftIcon,
  rightIcon,
  // Style variants
  theme,
  mode,
  size,
  // ---------------
  ...restProps
}) => {
  const Element = as;

  return (
    <Element
      className={cn([
        buttonVariants({ theme, mode, size }),
        className,
      ])}
      {...restProps}
    >
      {!!leftIcon && updateProps(leftIcon, {})}
      <span>{children}</span>
      {!!rightIcon && updateProps(rightIcon, {})}
    </Element>
  );
};

Button.displayName = "Button Component";
export default memo(Button);
