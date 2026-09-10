import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const CONTENT_DIR = path.resolve(process.cwd(), "content");

const CONTENT_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
};

/** Serves media that lives next to a post: `content/<slug>/assets/*`. */
export async function GET(_request: Request, context: RouteContext<"/api/content/[...path]">) {
  const { path: segments } = await context.params;
  const absolute = path.resolve(CONTENT_DIR, ...segments);

  // Stay inside content/, never serve the MDX sources themselves.
  if (!absolute.startsWith(`${CONTENT_DIR}${path.sep}`)) {
    return new NextResponse("Bad request", { status: 400 });
  }

  const type = CONTENT_TYPES[path.extname(absolute).toLowerCase()];
  if (!type) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    const file = await fs.readFile(absolute);
    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Content-Type": type,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }
  catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
