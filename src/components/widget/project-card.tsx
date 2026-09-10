import type { Project } from "#data/projects";
import type { Dictionary, Locale } from "#i18n";
import { ExternalLink } from "#components/ui/external-link";
import { PixelBox } from "#components/ui/pixel-box";
import { Tag } from "#components/ui/tag";
import { pick } from "#i18n";
import { cn } from "#utils";

interface ProjectCardProps {
  project: Project;
  lang: Locale;
  dict: Dictionary;
}

export function ProjectCard({ project, lang, dict }: ProjectCardProps) {
  return (
    <PixelBox
      as="article"
      variant={project.featured ? "fg" : "line"}
      className={cn("flex flex-col p-5 transition-shadow hover:shadow-pixel")}
    >
      <div className={cn("flex items-baseline justify-between gap-4")}>
        <h3 className={cn("font-pixel text-xl leading-tight")}>{project.name}</h3>
        {project.year && <span className={cn("text-sm text-muted")}>{project.year}</span>}
      </div>

      <p className={cn("mt-2 grow text-muted")}>{pick(project.description, lang)}</p>

      {project.stack.length > 0 && (
        <ul className={cn("mt-4 flex flex-wrap gap-1.5")} aria-label="Stack">
          {project.stack.map(item => <li key={item}><Tag>{item}</Tag></li>)}
        </ul>
      )}

      {project.links && (
        <div className={cn("mt-4 flex gap-5 text-sm")}>
          {project.links.live && <ExternalLink href={project.links.live}>{dict.common.live}</ExternalLink>}
          {project.links.source && <ExternalLink href={project.links.source}>{dict.common.source}</ExternalLink>}
        </div>
      )}
    </PixelBox>
  );
}
