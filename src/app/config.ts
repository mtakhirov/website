import type { HeaderLink } from "#types";
import type { Metadata, Viewport } from "next";

export const APP_NAME = "Takhirov's Diary";
export const APP_TITLE_TEMPLATE = `%s </> ${APP_NAME}`;

export const HEADER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
] satisfies HeaderLink[];

export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: APP_TITLE_TEMPLATE,
  },
  description: "A personal blog by Muhammaddiyor Takhirov",
  keywords: ["blog", "diary", "personal", "developer"],
  category: "blog",

  applicationName: APP_NAME,

  creator: "Muhammaddiyor Takhirov",
  authors: [{ name: "Muhammaddiyor Takhirov", url: "https://github.com/mtakhirov" }],
  generator: "Next.js",
  publisher: "Vercel",

  manifest: "/manifest.json",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
    shortcut: "/favicon.ico",
  },

  referrer: "origin",
  formatDetection: { telephone: true, address: true, email: true, date: true, url: false },
  robots: { follow: true, index: true, googleBot: { follow: true, index: true } },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
