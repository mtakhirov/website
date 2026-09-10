import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "pixelarticons/react/ArrowLeft";
import { ArrowRight } from "pixelarticons/react/ArrowRight";
import { ViewTransition } from "react";
import { MDXContent } from "#components/mdx/mdx-content";
import { AnimatedDither } from "#components/ui/animated-dither";
import { Dither } from "#components/ui/dither";
import { PixelBox } from "#components/ui/pixel-box";
import { Tag } from "#components/ui/tag";
import { postTransitionName } from "#components/widget/post-list";
import { Toc } from "#components/widget/toc";
import { getDictionary, localeNames, route } from "#i18n";
import { getAdjacentPosts, getAllSlugs, getPost, getSeries, parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn, formatDate } from "#utils";

export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

export async function generateMetadata(props: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const params = await props.params;
  const lang = parseLang(params.lang);
  const slug = params.slug;
  const post = getPost(slug, lang);
  if (!post) return {};

  return localizedMetadata({
    lang,
    path: `/blog/${slug}`,
    title: post.meta.title,
    description: post.meta.description,
    type: "article",
    publishedTime: post.meta.date,
    modifiedTime: post.meta.updated,
    tags: post.meta.tags,
  });
}

export default async function PostPage(props: PageProps<"/[lang]/blog/[slug]">) {
  const params = await props.params;
  const lang = parseLang(params.lang);
  const slug = params.slug;
  const dict = getDictionary(lang);

  const post = getPost(slug, lang);
  if (!post || !post.meta.published) notFound();

  const { prev, next } = getAdjacentPosts(slug, lang);
  const series = getSeries(slug, lang);

  return (
    <article>
      <header className={cn("mb-10")}>
        <div className={cn(`
          mb-8 h-14 border border-border bg-surface p-1 text-fg
          md:h-20
        `)}
        >
          <AnimatedDither
            seed={slug}
            field="diagonal"
            noise={0.35}
            density={0.7}
            cols={128}
            rows={16}
            className={cn("size-full")}
          >
            <Dither cols={128} rows={16} seed={slug} field="diagonal" noise={0.35} density={0.7} />
          </AnimatedDither>
        </div>

        <Link
          href={route(lang, `/blog`)}
          className={cn(`
            inline-flex items-center gap-1 text-sm text-muted
            hover:text-fg
          `)}
        >
          <ArrowLeft className={cn("size-3.5 crisp")} aria-hidden />
          {dict.blog.title}
        </Link>

        <ViewTransition name={postTransitionName(slug)} share="vt-morph">
          <h1 className={cn(`
            mt-4 max-w-[22ch] font-pixel text-4xl leading-[1.05] font-bold
            text-balance
            md:text-5xl
          `)}
          >
            {post.meta.title}
          </h1>
        </ViewTransition>

        {post.meta.description && (
          <p className={cn("mt-4 max-w-[65ch] text-lg text-muted")}>{post.meta.description}</p>
        )}

        <div className={cn(`
          mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted
        `)}
        >
          <time dateTime={post.meta.date}>{formatDate(post.meta.date)}</time>
          {post.meta.updated && (
            <span>
              {dict.common.updated}
              {" "}
              {formatDate(post.meta.updated)}
            </span>
          )}
          <span>
            {post.readingMinutes}
            {" "}
            {dict.common.minRead}
          </span>
          {post.meta.tags.length > 0 && (
            <ul className={cn("flex flex-wrap gap-1.5")} aria-label={dict.common.tags}>
              {post.meta.tags.map(tag => <li key={tag}><Tag>{tag}</Tag></li>)}
            </ul>
          )}
        </div>

        {post.isFallback && (
          <PixelBox
            variant="accent"
            role="note"
            className={cn("mt-6 max-w-[65ch] p-3 text-sm")}
          >
            {dict.blog.fallbackNotice}
            {" "}
            <span className={cn("text-muted")}>{`(${dict.blog.writtenIn}: ${localeNames[post.lang]})`}</span>
          </PixelBox>
        )}

        {series.length > 1 && (
          <nav
            aria-label={dict.blog.series}
            className={cn("mt-6 flex flex-wrap items-center gap-2 text-sm")}
          >
            <span className={cn("text-muted")}>
              {dict.blog.series}
              :
            </span>
            {series.map((part, index) => (
              <Link
                key={part.slug}
                href={route(lang, `/blog/${part.slug}`)}
                aria-current={part.slug === slug ? "page" : undefined}
                className={cn(
                  "border px-2 py-0.5",
                  part.slug === slug
                    ? "border-fg bg-fg text-bg"
                    : `border-border hover:border-fg`,
                )}
              >
                {index + 1}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <div className={cn("lg:grid lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-14")}>
        <div className={cn("prose")} lang={post.lang}>
          <MDXContent source={post.content} assetBase={post.dir} />
        </div>

        <aside className={cn("hidden lg:block")}>
          <div className={cn("sticky top-20")}>
            <Toc headings={post.headings} label={dict.blog.toc} />
          </div>
        </aside>
      </div>

      {(prev || next) && (
        <nav
          aria-label="Pagination"
          className={cn(`
            mt-20 grid gap-4 border-t-2 border-fg pt-8
            sm:grid-cols-2
          `)}
        >
          {prev
            ? (
                <Link
                  href={route(lang, `/blog/${prev.slug}`)}
                  className={cn(`group`)}
                >
                  <span className={cn(`
                    inline-flex items-center gap-1 text-sm text-muted
                  `)}
                  >
                    <ArrowLeft className={cn("size-3.5 crisp")} aria-hidden />
                    {dict.blog.prev}
                  </span>
                  <span className={cn(`
                    mt-1 block font-pixel text-xl leading-tight
                    group-hover:text-accent
                  `)}
                  >
                    {prev.meta.title}
                  </span>
                </Link>
              )
            : <span />}
          {next && (
            <Link
              href={route(lang, `/blog/${next.slug}`)}
              className={cn("group sm:text-right")}
            >
              <span className={cn(`
                inline-flex items-center gap-1 text-sm text-muted
              `)}
              >
                {dict.blog.next}
                <ArrowRight className={cn("size-3.5 crisp")} aria-hidden />
              </span>
              <span className={cn(`
                mt-1 block font-pixel text-xl leading-tight
                group-hover:text-accent
              `)}
              >
                {next.meta.title}
              </span>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
}
