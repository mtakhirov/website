import { getDictionary } from "#i18n";
import { getPost, parseLang } from "#lib/blog";
import { ogContentType, ogImage, ogSize } from "#lib/og";

export const dynamic = "force-static";
export const alt = "Blog post";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image(props: { params: Promise<{ lang: string; slug: string }> }) {
  const params = await props.params;
  const lang = parseLang(params.lang);
  const slug = params.slug;
  const dict = getDictionary(lang);
  const post = getPost(slug, lang);

  return ogImage({
    title: post?.meta.title ?? dict.blog.title,
    subtitle: post?.meta.description,
    kind: `${dict.blog.title} · ${post ? post.meta.date : ""}`,
    lang: post?.lang ?? lang,
    seed: slug,
  });
}
