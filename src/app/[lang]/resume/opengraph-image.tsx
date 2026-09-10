import { site } from "#config/site";
import { resume } from "#data/resume";
import { getDictionary, pick } from "#i18n";
import { parseLang } from "#lib/blog";
import { ogContentType, ogImage, ogSize } from "#lib/og";

export const dynamic = "force-static";
export const alt = "Resume";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image(props: { params: Promise<{ lang: string }> }) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return ogImage({ title: site.author, subtitle: pick(resume.headline, lang), kind: dict.resume.title, lang });
}
