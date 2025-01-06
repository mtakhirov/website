import type React from "react";
import type { Locale } from "#features/i18n";

import path from "node:path";
import fs from "node:fs/promises";

import { parseMDX } from "#features/mdx";
import { getLocale } from "next-intl/server";

interface Frontmatter {
  title: string;
}

interface PageParams {
  slug: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

export const BlogDetailPage: React.FC<PageProps> = async (props) => {
  const { slug } = await props.params;
  const locale = (await getLocale()) as Locale;

  const contentDirectory = path.resolve(process.cwd(), "content");
  const content = await fs.readFile(
    path.join(contentDirectory, slug, `${locale}.mdx`),
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
