import type { Metadata } from "next";
import { Archive } from "pixelarticons/react/Archive";
import { Star } from "pixelarticons/react/Star";
import { PageHeader, SectionTitle } from "#components/ui/heading";
import { ProjectCard } from "#components/widget/project-card";
import { projects } from "#data/projects";
import { getDictionary } from "#i18n";
import { parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn } from "#utils";

export async function generateMetadata(props: PageProps<"/[lang]/projects">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return localizedMetadata({ lang, path: "/projects", title: dict.projects.title, description: dict.projects.description });
}

export default async function ProjectsPage(props: PageProps<"/[lang]/projects">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  const featured = projects.filter(project => project.featured);
  const rest = projects.filter(project => !project.featured);

  return (
    <>
      <PageHeader title={dict.projects.title} description={dict.projects.description} />

      {projects.length === 0 && <p className={cn("text-muted")}>{dict.projects.empty}</p>}

      {featured.length > 0 && (
        <section>
          <SectionTitle icon={Star} className={cn("mb-6")}>{dict.projects.featured}</SectionTitle>
          <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3")}>
            {featured.map(project => <ProjectCard key={project.slug} project={project} lang={lang} dict={dict} />)}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className={cn("mt-16")}>
          <SectionTitle icon={Archive} className={cn("mb-6")}>{dict.projects.archive}</SectionTitle>
          <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3")}>
            {rest.map(project => <ProjectCard key={project.slug} project={project} lang={lang} dict={dict} />)}
          </div>
        </section>
      )}
    </>
  );
}
