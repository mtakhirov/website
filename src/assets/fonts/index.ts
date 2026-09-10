import { Geist_Mono, Pixelify_Sans } from "next/font/google";

/** Body, UI and code. */
export const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

/** Display headings and labels. */
export const fontPixel = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pixelify",
  display: "swap",
});
