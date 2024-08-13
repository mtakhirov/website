import type { FC } from 'react';
import type { ButtonProps } from '#components/shared/Button/types';

import { buttonVariants } from '#components/shared/Button/variants';
import { cn } from '#utils';

export const Button: FC<ButtonProps> = ({
  children,
  className,
  // Button variants
  theme,
  style,
  size,
  // ---------------
  ...props
}) => {
  const variantClassNames = buttonVariants({ theme, style, size });
  const $className = cn(variantClassNames, className);

  return (
    <button className={$className} {...props}>
      {children}
    </button>
  );
};

Button.displayName = 'Button Component';
export default Button;
