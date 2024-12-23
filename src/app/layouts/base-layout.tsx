import type React from "react";
import type { LayoutFC } from "@/app/layouts";

import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { FooterWidget, HeaderWidget } from "#widgets";

export const BaseLayout: LayoutFC = async ({ children }) => {
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
BaseLayout.displayName = "Base layout";
