import { generateOGImage, ogContentType, ogImageSize } from "#lib/og-image";

export const runtime = "nodejs";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Projects - Takhirov's Diary";

export default async function OGImage() {
  return generateOGImage({
    title: "Projects",
    description: "Open-source projects and side projects — web applications, CLI tools, APIs, and component libraries.",
    type: "page",
  });
}
