import { getDictionary } from "#i18n";
import { parseLang } from "#lib/blog";
import { ogContentType, ogImage, ogSize } from "#lib/og";

export const dynamic = "force-static";
export const alt = "Muhammaddiyor Tohirov";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image(props: { params: Promise<{ lang: string }> }) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return ogImage({ title: dict.meta.title, subtitle: dict.home.heroRole, lang, seed: "takhirov-home" });
}
