import { getDictionary } from "#i18n";
import { parseLang } from "#lib/blog";
import { ogContentType, ogImage, ogSize } from "#lib/og";

export const dynamic = "force-static";
export const alt = "Uses";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image(props: { params: Promise<{ lang: string }> }) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return ogImage({ title: dict.uses.title, subtitle: dict.uses.description, kind: dict.meta.siteName, lang });
}
