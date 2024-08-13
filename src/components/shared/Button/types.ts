import type React from 'react';
import type { VariantProps } from 'class-variance-authority';
import type { buttonVariants } from '#components/shared/Button/variants';

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = ButtonVariants &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
