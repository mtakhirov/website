import type { Locale } from "#features/i18n";
import type React from "react";

import path from "node:path";
import process from "node:process";

import { parseMDX } from "#features/mdx";
import { getLocale } from "next-intl/server";

import { read } from "to-vfile";

interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
}

interface PageParams {
  slug: string;
}

interface PageProps {
  params: Promise<PageParams>;
}

export const BlogDetailPage: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const locale = (await getLocale()) as Locale;

  const contentDirectory = path.resolve(process.cwd(), "content");

  const content = await read(
    path.resolve(contentDirectory, slug, `${locale}.mdx`),
    { encoding: "utf-8", flag: "r" },
  );

  const MDX = await parseMDX<Frontmatter>(content);

  return (
    <main id="blog-detail-page" className="container">
      <h1 className="mb-2 text-balance text-4xl font-bold">
        {MDX.frontmatter.title}
      </h1>

      <section className="mb-6 flex justify-between">
        <div className="inline-flex gap-2">
          {MDX.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-2.5 py-1.5 font-mono text-xs text-white/40"
            >
              #{tag}
            </span>
          ))}
        </div>
      </section>

      <section className="prose-mdx prose-base">{MDX.content}</section>
    </main>
  );
};
BlogDetailPage.displayName = "Blog detail page";
