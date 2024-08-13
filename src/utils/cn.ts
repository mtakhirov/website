import { type ClassArray, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: ClassArray) => {
  return twMerge(clsx(classNames));
};
export default cn;
