import { generateOGImage, ogContentType, ogImageSize } from "#lib/og-image";

export const runtime = "nodejs";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "About Muhammaddiyor Takhirov";

export default async function OGImage() {
  return generateOGImage({
    title: "About Me",
    description: "Software developer, open-source enthusiast, and night-time coder. Building things with TypeScript, React, and Next.js.",
    type: "page",
  });
}
