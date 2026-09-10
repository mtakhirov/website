import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "pixelarticons/react/ArrowRight";
import { Article } from "pixelarticons/react/Article";
import { Briefcase } from "pixelarticons/react/Briefcase";
import { Code } from "pixelarticons/react/Code";
import { Target } from "pixelarticons/react/Target";
import { AnimatedDither } from "#components/ui/animated-dither";
import { ButtonLink } from "#components/ui/button";
import { Dither } from "#components/ui/dither";
import { SectionTitle } from "#components/ui/heading";
import { Tag } from "#components/ui/tag";
import { PostList } from "#components/widget/post-list";
import { ProjectCard } from "#components/widget/project-card";
import { profile } from "#data/profile";
import { projects } from "#data/projects";
import { getDictionary, pick, route } from "#i18n";
import { getPosts, parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn } from "#utils";

export async function generateMetadata(props: PageProps<"/[lang]">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return {
    ...localizedMetadata({ lang, path: "", title: dict.meta.title, description: dict.meta.description }),
    title: { absolute: `${dict.meta.title} | ${dict.home.heroRole}` },
  };
}

export default async function HomePage(props: PageProps<"/[lang]">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  const posts = getPosts(lang).slice(0, 3);
  const featured = projects.filter(project => project.featured).slice(0, 4);

  return (
    <>
      {/* Hero: full-bleed animated dither behind left-aligned type. */}
      <section className={cn("relative bleed -mt-10 overflow-hidden md:-mt-14")}>
        <AnimatedDither
          seed="takhirov-home"
          field="blob"
          noise={0.3}
          density={0.5}
          center={[0.72, 0.42]}
          mode="cover"
          cell={8}
          cursor
          className={cn("absolute inset-0 hero-mask text-fg/35 sm:text-fg/50")}
        >
          <Dither cols={160} rows={56} seed="takhirov-home" field="blob" noise={0.3} density={0.5} center={[0.72, 0.42]} preserveAspectRatio="xMidYMid slice" />
        </AnimatedDither>

        <div className={cn(`
          relative mx-auto max-w-5xl px-4 pt-20 pb-16
          md:px-6 md:pt-28 md:pb-24
        `)}
        >
          <p className={cn("text-muted")}>{dict.home.heroRole}</p>
          <h1 className={cn(`
            mt-3 max-w-[12ch] font-pixel text-4xl leading-[0.95] font-bold
            text-balance
            sm:text-5xl
            md:text-7xl
          `)}
          >
            {dict.home.heroTitle}
          </h1>
          <p className={cn("mt-6 max-w-[46ch] text-lg leading-relaxed")}>{dict.home.heroText}</p>
          <div className={cn("mt-8 flex flex-wrap gap-3")}>
            <ButtonLink href={route(lang, "/blog")}>{dict.home.ctaPrimary}</ButtonLink>
            <ButtonLink href={route(lang, "/projects")} variant="secondary">{dict.home.ctaSecondary}</ButtonLink>
          </div>
        </div>
      </section>

      {/* Facts row */}
      <dl className={cn(`
        sr-only grid border-y border-line
        sm:grid-cols-3 sm:divide-x sm:divide-line
      `)}
      >
        <div className={cn("py-4 sm:pr-6")}>
          <dt className={cn("flex items-center gap-1.5 text-xs text-muted")}>
            <Target className={cn("size-3.5 text-accent crisp")} aria-hidden />
            {dict.home.factsFocus}
          </dt>
          <dd className={cn("mt-1 font-pixel text-lg leading-tight")}>{pick(profile.focus, lang)}</dd>
        </div>
        <div className={cn("border-t border-line py-4 sm:border-t-0 sm:px-6")}>
          <dt className={cn("flex items-center gap-1.5 text-xs text-muted")}>
            <Code className={cn("size-3.5 text-accent crisp")} aria-hidden />
            {dict.home.factsStack}
          </dt>
          <dd className={cn("mt-2 flex flex-wrap gap-1.5")}>
            {profile.stack.map(item => <Tag key={item} className={cn("text-fg")}>{item}</Tag>)}
          </dd>
        </div>
      </dl>

      <section className={cn("mt-20")}>
        <div className={cn("mb-6 flex items-baseline justify-between gap-4")}>
          <SectionTitle icon={Article}>{dict.home.latestWriting}</SectionTitle>
          <Link
            href={route(lang, "/blog")}
            className={cn(`
              inline-flex items-center gap-1 text-sm text-muted
              hover:text-fg
            `)}
          >
            {dict.common.viewAll}
            <ArrowRight className={cn("size-3.5 crisp")} aria-hidden />
          </Link>
        </div>
        <PostList posts={posts} lang={lang} dict={dict} />
      </section>

      <section className={cn("mt-20")}>
        <div className={cn("mb-6 flex items-baseline justify-between gap-4")}>
          <SectionTitle icon={Briefcase}>{dict.home.selectedProjects}</SectionTitle>
          <Link
            href={route(lang, "/projects")}
            className={cn(`
              inline-flex items-center gap-1 text-sm text-muted
              hover:text-fg
            `)}
          >
            {dict.common.viewAll}
            <ArrowRight className={cn("size-3.5 crisp")} aria-hidden />
          </Link>
        </div>
        <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3")}>
          {featured.map(project => <ProjectCard key={project.slug} project={project} lang={lang} dict={dict} />)}
        </div>
      </section>
    </>
  );
}
