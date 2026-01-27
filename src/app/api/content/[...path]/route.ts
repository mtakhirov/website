import fs from "fs";
import path from "path";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: pathSegments } = await params;
  const relativePath = pathSegments.join("/");

  // Security: prevent directory traversal
  if (relativePath.includes("..")) {
    return new NextResponse("Invalid path", { status: 400 });
  }

  const absolutePath = path.join(process.cwd(), "content", relativePath);

  if (!fs.existsSync(absolutePath)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const stats = fs.statSync(absolutePath);
  if (stats.isDirectory()) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const fileBuffer = fs.readFileSync(absolutePath);
  const extension = path.extname(absolutePath).toLowerCase();

  const contentTypes: Record<string, string> = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".ogv": "video/ogg",
  };

  const contentType = contentTypes[extension] || "application/octet-stream";

  return new NextResponse(fileBuffer, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
