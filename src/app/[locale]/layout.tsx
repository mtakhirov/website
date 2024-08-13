import type { FC, PropsWithChildren } from 'react';
import type { Metadata, Viewport } from 'next';
import { I18nProviderClient } from '@/locales/client';
import { FooterSection, HeaderSection } from '@/sections';

import '#assets/tailwind.css';

export const metadata: Metadata = {
  title: "Takhirov's Diary",
  description: 'Goofy ahh description'
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark'
};

const Layout: FC<PropsWithChildren & { params: { locale: string } }> = ({
  children,
  params
}) => {
  return (
    <html lang={params.locale}>
      <body id='app' className=''>
        <HeaderSection />

        <I18nProviderClient locale={params.locale}>
          {children}
        </I18nProviderClient>

        <FooterSection />
      </body>
    </html>
  );
};

Layout.displayName = 'Layout';
export default Layout;
