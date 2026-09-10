import type { Dictionary, Locale } from "#i18n";
import type { Post } from "#types";
import Link from "next/link";
import { ViewTransition } from "react";
import { Tag } from "#components/ui/tag";
import { localeNames, route } from "#i18n";
import { cn, formatDate } from "#utils";

interface PostListProps {
  posts: Post[];
  lang: Locale;
  dict: Dictionary;
}

export function postTransitionName(slug: string): string {
  return `post-${slug.replaceAll("/", "-")}`;
}

export function PostList({ posts, lang, dict }: PostListProps) {
  if (posts.length === 0) {
    return <p className={cn("text-muted")}>{dict.blog.empty}</p>;
  }

  return (
    <ul>
      {posts.map(post => (
        <li
          key={post.slug}
          className={cn(`
            grid gap-x-6 gap-y-1 border-t border-line py-5
            first:border-t-0 first:pt-0
            md:grid-cols-[11ch_1fr]
          `)}
        >
          <time
            dateTime={post.meta.date}
            className={cn(`pt-1 text-sm text-muted`)}
          >
            {formatDate(post.meta.date)}
          </time>

          <div>
            <Link
              href={route(lang, `/blog/${post.slug}`)}
              className={cn("group inline-block")}
            >
              <ViewTransition name={postTransitionName(post.slug)} share="vt-morph">
                <h3 className={cn(`
                  font-pixel text-2xl leading-tight
                  group-hover:text-accent
                `)}
                >
                  {post.meta.title}
                </h3>
              </ViewTransition>
            </Link>

            <p className={cn("mt-1 line-clamp-2 max-w-[65ch] text-muted")}>{post.meta.description}</p>

            <div className={cn(`
              mt-3 flex flex-wrap items-center gap-1.5 text-xs text-muted
            `)}
            >
              {post.meta.tags.slice(0, 4).map(tag => <Tag key={tag}>{tag}</Tag>)}
              <span className={cn("ml-1")}>
                {post.readingMinutes}
                {" "}
                {dict.common.minRead}
              </span>
              {post.isFallback && <Tag className={cn("border-accent text-accent")}>{localeNames[post.lang]}</Tag>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
