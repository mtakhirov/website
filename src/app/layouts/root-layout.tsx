import type { LayoutFC } from "@/app/layouts";
import type React from "react";

import { cn } from "#shared/utils";
import { BaseLayout } from "@/app/layouts";
import { GeistMono } from "geist/font/mono";

import { GeistSans } from "geist/font/sans";
import { getLocale } from "next-intl/server";

import "#shared/assets/css/tailwind.css";

export const RootLayout: LayoutFC = async (props) => {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={cn(GeistSans.variable, GeistMono.variable, "antialiased")}
    >
      <BaseLayout {...props} />
    </html>
  );
};
RootLayout.displayName = "Root layout";
