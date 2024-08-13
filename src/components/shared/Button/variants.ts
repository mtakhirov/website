import { type VariantProps, cva } from 'class-variance-authority';

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export const buttonVariants = cva('outline-none border-none ring-0', {
  variants: {
    theme: {
      primary: 'bg-gray-900',
      secondary: 'bg-gray-200'
    },
    style: {
      square: 'rounded-lg',
      rounded: 'rounded-full'
    },
    size: {
      lg: 'py-4 px-6 text-lg',
      md: 'py-2.5 px-4 text-base',
      sm: 'py-2 px-3.5 text-sm',
      xs: 'py-1 px-2.5 text-xs'
    }
  },
  defaultVariants: {
    theme: 'primary',
    style: 'rounded',
    size: 'md'
  }
});
