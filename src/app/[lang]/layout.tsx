import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import { fontMono, fontPixel } from "#assets/fonts";
import { Providers } from "#components/ui/providers";
import { Footer } from "#components/widget/footer";
import { Header } from "#components/widget/header";
import { site, SITE_URL } from "#config/site";
import { getDictionary, locales, localeTags, ogLocales } from "#i18n";
import { parseLang } from "#lib/blog";
import { cn } from "#utils";

import "#assets/css/tailwind.css";

export function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

export async function generateMetadata(props: LayoutProps<"/[lang]">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.title,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    applicationName: dict.meta.siteName,
    authors: [{ name: site.author, url: SITE_URL }],
    creator: site.author,
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/icon0.svg", type: "image/svg+xml" },
        { url: "/favicon/icon1.png", type: "image/png" },
      ],
      apple: "/favicon/apple-icon.png",
    },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      locale: ogLocales[lang],
      url: `${SITE_URL}/${lang}`,
    },
    twitter: { card: "summary_large_image", creator: `@${site.handle}` },
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: site.themeColor.dark,
};

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);

  return (
    <html
      lang={localeTags[lang]}
      className={cn(fontMono.variable, fontPixel.variable, `antialiased`)}
      suppressHydrationWarning
    >
      <body className={cn("flex min-h-dvh flex-col")}>
        <Providers>
          <a
            href="#main"
            className={cn(`
              sr-only
              focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50
              focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-fg
            `)}
          >
            {dict.common.skipToContent}
          </a>

          <Header lang={lang} dict={dict} />

          <main
            id="main"
            className={cn(`
              mx-auto w-full max-w-5xl grow px-4 pt-10
              md:px-6 md:pt-14
            `)}
          >
            <ViewTransition default="vt-page">{props.children}</ViewTransition>
          </main>

          <Footer lang={lang} dict={dict} />
        </Providers>
      </body>
    </html>
  );
}
