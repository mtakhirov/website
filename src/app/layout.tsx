import type React from "react";

import { getLocale } from "next-intl/server";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { RootLayout } from "#features/pages";
import { cn } from "#shared/utils";

// Styles
import "#shared/assets/css/tailwind.css";

export { metadata, viewport } from "@/app/config";

export default async function Root({ children }: React.PropsWithChildren) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={cn(GeistSans.variable, GeistMono.variable, "antialiased")}
    >
      <RootLayout>{children}</RootLayout>
    </html>
  );
}
