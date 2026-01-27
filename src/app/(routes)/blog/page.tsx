import type { Metadata } from "next";
import Link from "next/link";
import * as React from "react";
import { getPublishedPosts } from "#lib/blog";
import { cn } from "~/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and tutorials about web development, TypeScript, React, Next.js, and modern frontend technologies by Muhammaddiyor Takhirov.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Blog({ }: PageProps<"/blog">) {
  const posts = getPublishedPosts();

  return (
    <React.Fragment>
      <header className="mb-10">
        <h1
          className={`
            text-3xl font-bold tracking-tight text-foreground
            md:text-4xl
          `}
        >
          Blog
        </h1>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Dasturlash, texnologiya va shaxsiy tajribalarim haqida yozuvlar.
        </p>
      </header>

      <section className="w-full max-w-3xl">
        {posts.length === 0
          ? (
              <p className="text-muted-foreground">Hozircha postlar yo&apos;q.</p>
            )
          : (
              <div className="flex flex-col">
                {posts.map((post, index) => (
                  <article key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}` as "/blog/[...slug]"}
                      className="group block py-6"
                    >
                      <div className="flex flex-col gap-3">
                        {/* Date and tags */}
                        <div
                          className={cn(`
                            flex flex-wrap items-center gap-2 text-xs
                            text-muted-foreground
                          `)}
                        >
                          <time
                            dateTime={post.frontmatter.date}
                            style={{
                              viewTransitionName: `post-date-${post.slug.replaceAll("/", "-")}`,
                            }}
                          >
                            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </time>
                          <span className="text-border">•</span>
                          <div className="flex gap-1.5">
                            {post.frontmatter.tags.slice(0, 3).map(tag => (
                              <span
                                key={tag}
                                className={`
                                  rounded-sm border border-border bg-muted/50
                                  px-1.5 py-0.5 text-[10px] tracking-wider
                                  uppercase
                                `}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Title */}
                        <h2
                          className={`
                            text-xl font-semibold text-foreground
                            transition-colors
                            group-hover:text-primary
                            md:text-2xl
                          `}
                          style={{
                            viewTransitionName: `post-title-${post.slug.replaceAll("/", "-")}`,
                          }}
                        >
                          {post.frontmatter.title}
                        </h2>

                        {/* Description */}
                        <p
                          className="line-clamp-2 text-muted-foreground"
                          style={{
                            viewTransitionName: `post-description-${post.slug.replaceAll("/", "-")}`,
                          }}
                        >
                          {post.frontmatter.description}
                        </p>

                        {/* Read more */}
                        <span
                          className={`
                            inline-flex items-center gap-1 text-sm font-medium
                            text-primary
                          `}
                        >
                          O&apos;qishni davom ettirish
                          <svg
                            className={cn(`
                              size-4 transition-transform
                              group-hover:translate-x-1
                            `)}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </div>
                    </Link>
                    {index < posts.length - 1 && <hr className="border-border" />}
                  </article>
                ))}
              </div>
            )}
      </section>
    </React.Fragment>
  );
}
