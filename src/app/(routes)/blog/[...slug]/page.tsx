import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as React from "react";
import { APP_NAME, SITE_URL } from "#app/config";
import { MDXContent } from "#components/mdx/mdx-content";
import { TableOfContents } from "#components/widget/table-of-contents";
import { extractHeadings, getAllSlugs, getPostBySlug } from "#lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map(slug => ({
    slug: slug.split("/"),
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = getPostBySlug(slugPath);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const { frontmatter } = post;

  const ogImageUrl = `/api/og?slug=${encodeURIComponent(slugPath)}`;

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    keywords: frontmatter.tags,
    authors: [{ name: "Muhammaddiyor Takhirov" }],
    openGraph: {
      type: "article",
      title: frontmatter.title,
      description: frontmatter.description,
      url: `${SITE_URL}/blog/${slugPath}`,
      siteName: APP_NAME,
      publishedTime: frontmatter.date,
      authors: ["Muhammaddiyor Takhirov"],
      tags: frontmatter.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
      images: [ogImageUrl],
    },
    alternates: {
      canonical: `/blog/${slugPath}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = getPostBySlug(slugPath);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  const { frontmatter, content } = post;
  const headings = extractHeadings(content);

  // JSON-LD structured data for blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": frontmatter.title,
    "description": frontmatter.description,
    "datePublished": frontmatter.date,
    "dateModified": frontmatter.date,
    "author": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
      "url": "https://github.com/mtakhirov",
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slugPath}`,
    },
    "keywords": frontmatter.tags.join(", "),
  };

  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Table of Contents - Fixed on right for desktop, floating button for mobile */}
      {/* <TableOfContents headings={headings} /> */}

      <article className="w-full max-w-3xl">
        {/* Article Header */}
        <header className="mb-10 border-b border-border pb-8">
          <div className={`
            mb-4 flex flex-wrap items-center gap-3 font-mono text-xs
            text-muted-foreground
          `}
          >
            <time
              dateTime={frontmatter.date}
              className="flex items-center gap-1.5"
              style={{
                viewTransitionName: `post-date-${slugPath.replaceAll("/", "-")}`,
              }}
            >
              <span className="inline-block size-1 rounded-full bg-primary" />
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-border">•</span>
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map(tag => (
                <span
                  key={tag}
                  className={`
                    rounded-md border border-border bg-muted/50 px-2 py-0.5
                    text-muted-foreground transition-colors
                    hover:bg-muted hover:text-foreground
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <h1
            className={`
              text-3xl font-bold tracking-tight text-foreground
              md:text-4xl
            `}
            style={{
              viewTransitionName: `post-title-${slugPath.replaceAll("/", "-")}`,
            }}
          >
            {frontmatter.title}
          </h1>

          <p
            className="mt-4 text-base text-muted-foreground md:text-lg"
            style={{
              viewTransitionName: `post-description-${slugPath.replaceAll("/", "-")}`,
            }}
          >
            {frontmatter.description}
          </p>
        </header>

        {/* Article Content */}
        <div className="mdx-content">
          <MDXContent source={content} slug={slugPath} />
        </div>
      </article>
    </React.Fragment>
  );
}
