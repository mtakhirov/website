import { generateOGImage, ogContentType, ogImageSize } from "#lib/og-image";

export const runtime = "nodejs";
export const size = ogImageSize;
export const contentType = ogContentType;
export const alt = "Resume - Muhammaddiyor Takhirov";

export default async function OGImage() {
  return generateOGImage({
    title: "Resume",
    description: "Professional experience and skills — software developer with expertise in TypeScript, React, Next.js, and full-stack development.",
    type: "page",
  });
}
