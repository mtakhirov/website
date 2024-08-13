import type { FC, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import { HeaderSection, FooterSection } from '#sections';

import '#assets/tailwind.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Takhirov's Diary",
  description: 'Goofy ahh description'
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en'>
      <body id='app' className={inter.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
};

RootLayout.displayName = 'Root Layout';
export default RootLayout;
