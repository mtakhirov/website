import type { Post } from "#types";
import type { Metadata } from "next";
import { PageHeader } from "#components/ui/heading";
import { PostList } from "#components/widget/post-list";
import { getDictionary } from "#i18n";
import { getPosts, parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn, yearOf } from "#utils";

export async function generateMetadata(props: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return localizedMetadata({ lang, path: "/blog", title: dict.blog.title, description: dict.blog.description });
}

function groupByYear(posts: Post[]): [number, Post[]][] {
  const groups = new Map<number, Post[]>();
  for (const post of posts) {
    const year = yearOf(post.meta.date);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups.entries()].sort((a, b) => b[0] - a[0]);
}

export default async function BlogPage(props: PageProps<"/[lang]/blog">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  const posts = getPosts(lang);
  const years = groupByYear(posts);

  return (
    <>
      <PageHeader title={dict.blog.title} description={dict.blog.description} />

      {years.length === 0
        ? <p className={cn("text-muted")}>{dict.blog.empty}</p>
        : years.map(([year, group]) => (
            <section
              key={year}
              className={cn(`
                grid gap-4 border-t-2 border-fg py-8
                md:grid-cols-[8ch_1fr] md:gap-10
              `)}
            >
              <h2 className={cn(`
                font-pixel text-3xl leading-none text-muted
                md:sticky md:top-20 md:self-start
              `)}
              >
                {year}
              </h2>
              <PostList posts={group} lang={lang} dict={dict} />
            </section>
          ))}
    </>
  );
}
