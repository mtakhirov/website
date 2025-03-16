import type { LayoutFC } from "@/app/layouts";
import type React from "react";

import { AlertBanner } from "../components/alert-banner";
import { FooterWidget, HeaderWidget } from "#widgets";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const BaseLayout: LayoutFC = async ({ children }) => {
  const messages = await getMessages();

  return (
    <body id="app">
      <AlertBanner />

      <NextIntlClientProvider messages={messages}>
        <HeaderWidget />
      </NextIntlClientProvider>

      {children}

      <FooterWidget />
    </body>
  );
};
BaseLayout.displayName = "Base layout";
