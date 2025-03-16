import { GithubIcon, Globe } from "lucide-react";

const projects = [
  {
    title: "Personal Website",
    description: "My personal website built with Next.js and TailwindCSS",
    technologies: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/yourusername/website",
    live: "https://yourwebsite.com",
  },
  // Add more projects here
];

export const ProjectsPage = () => {
  return (
    <main className="container">
      <section className="space-y-8">
        <h1 className="text-4xl font-bold text-white/90">Projects</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={index}
              className="space-y-4 rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10"
            >
              <h2 className="text-2xl font-semibold text-white/80">
                {project.title}
              </h2>
              
              <p className="text-white/60">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white/90"
                  >
                    <GithubIcon className="size-4" />
                    <span>GitHub</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white/90"
                  >
                    <Globe className="size-4" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}; 