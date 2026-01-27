import { generateOGImage, ogContentType, ogImageSize } from "#lib/og-image";

export const runtime = "nodejs";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Blog - Takhirov's Diary";

export default async function OGImage() {
  return generateOGImage({
    title: "Blog",
    description: "Articles and tutorials about web development, TypeScript, React, Next.js, and modern frontend technologies.",
    type: "page",
  });
}
