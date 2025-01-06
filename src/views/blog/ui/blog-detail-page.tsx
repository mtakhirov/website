import type React from "react";

import path from "node:path";
import fs from "node:fs/promises";

import { parseMDX } from "#features/mdx";

interface Frontmatter {
  title: string;
}

export const BlogDetailPage: React.FC = async () => {
  const contentDirectory = path.resolve(process.cwd(), "content");
  const content = await fs.readFile(
    path.join(contentDirectory, "hello-world", "uz.mdx"),
    "utf-8",
  );

  const Component = await parseMDX<Frontmatter>(content);

  return (
    <main id="blog-detail-page" className="container">
      <section className="prose-base">{Component.content}</section>
    </main>
  );
};
BlogDetailPage.displayName = "Blog detail page";
