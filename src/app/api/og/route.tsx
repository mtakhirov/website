import type { NextRequest } from "next/server";
import { APP_DESCRIPTION, APP_NAME } from "#app/config";
import { getPostBySlug } from "#lib/blog";
import { generateOGImage, ogContentType, ogImageSize } from "#lib/og-image";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const type = searchParams.get("type") as "article" | "page" | "default" | null;
  const slug = searchParams.get("slug");

  // If slug is provided, fetch blog post data
  if (slug) {
    const post = getPostBySlug(slug);
    if (post) {
      return generateOGImage({
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        type: "article",
        date: post.frontmatter.date,
        tags: post.frontmatter.tags,
      });
    }
  }

  // Generate OG image with provided params or defaults
  return generateOGImage({
    title: title || APP_NAME,
    description: description || APP_DESCRIPTION,
    type: type || "default",
  });
}

export { ogContentType as contentType, ogImageSize as size };
