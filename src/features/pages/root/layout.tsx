import type React from "react";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { FooterWidget, HeaderWidget } from "#widgets";

export default async ({ children }: React.PropsWithChildren) => {
  const messages = await getMessages();

  return (
    <body id="app">
      <NextIntlClientProvider messages={messages}>
        <HeaderWidget />
      </NextIntlClientProvider>

      {children}

      <FooterWidget />
    </body>
  );
};
