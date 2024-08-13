import type { FC } from 'react';
import { cn } from '#utils';

export const FooterSection: FC = () => {
  return (
    <footer
      className={cn(
        'container flex justify-between text-white/50 border-t border-white/50 py-4 mt-4'
      )}
    >
      <div>Thank you for visiting {`:)`}</div>
      <div>Source Code {`->`}</div>
    </footer>
  );
};

FooterSection.displayName = 'Footer section';
export default FooterSection;
