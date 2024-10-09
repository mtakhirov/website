import type React from "react";
import type { PropsWithChildren } from "react";
import type { Metadata, Viewport } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "#utils";

// Styles
import "#assets/tailwind.css";

export const metadata: Metadata = {
  title: {
    default: "Takhirov's Diary",
    template: "%s || Takhirov's Diary",
  },

  description: "Some description content",
  creator: "Mukhammaddiyor Takhirov <mtohirov60@gmail.com>",
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#000000",

  initialScale: 1,
  userScalable: false,
  width: "device-width",
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable, "antialiased")}
    >
      <body
        id="app"
        className="bg-white dark:bg-black text-black dark:text-white"
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
