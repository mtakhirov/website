import { type NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, type Locale, locales } from "#i18n/config";

/** Picks the best supported locale from an Accept-Language header. */
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part, index) => {
      const [tag = "", ...params] = part.trim().split(";");
      const q = params.find(p => p.trim().startsWith("q="));
      const weight = q ? Number(q.split("=")[1]) : 1;
      return { tag: tag.toLowerCase(), weight: Number.isNaN(weight) ? 0 : weight, index };
    })
    .sort((a, b) => b.weight - a.weight || a.index - b.index);

  for (const { tag } of ranked) {
    const primary = tag.split("-")[0];
    if (isLocale(primary)) return primary;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
  if (hasLocale) return NextResponse.next();

  const cookie = request.cookies.get("lang")?.value;
  const lang = isLocale(cookie) ? cookie : negotiate(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${lang}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  // Everything except API routes, Next internals and files with an extension.
  matcher: ["/((?!api|_next|favicon|.*\\..*).*)"],
};
