import type { Metadata } from "next";

import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import * as React from "react";
import { buttonVariants } from "#components/ui/button-variants";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "#components/ui/card";
import { cn } from "#utils";
import { Heading } from "~/components/ui/heading";
import { Paragraph } from "~/components/ui/paragraph";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Muhammaddiyor Tohirov — personal website, organization sites, Telegram bot starter, experimental language and tooling.",
  alternates: {
    canonical: "/projects",
  },
};

const PROJECTS = [
  {
    title: "Personal Website",
    description: "Shu sayt — Next.js, TypeScript va Tailwind CSS v4 bilan qurilgan shaxsiy portfolio va blog. MDX blog, SEO, va animatsiyalar bilan.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    github: "https://github.com/mtakhirov/website",
    demo: "https://takhirov.uz",
  },
  {
    title: "Telegram Bot Starter",
    description: "grammY asosidagi Telegram botlar uchun starter template — fayl tuzilmasi, konfiguratsiya va best‑practice lar jamlanmasi.",
    tech: ["Node.js", "TypeScript", "grammY"],
    github: "https://github.com/mtakhirov/telegram-bot-starter",
    demo: null,
  },
  {
    title: "Jovo Language (jovo-lang)",
    description: "C++ da yozilgan tajriba loyihasi — kompilyator va til dizayni asoslarini o‘rganish uchun yaratilgan toy language.",
    tech: ["C++", "Compilers"],
    github: "https://github.com/mtakhirov/jovo-lang",
    demo: null,
  },
] as const;

export default function Projects({ }: PageProps<"/projects">) {
  return (
    <React.Fragment>
      <Heading>
        Projects
      </Heading>

      <Paragraph
        variant="mono"
        className={cn(`mt-4 max-w-2xl text-white/70`)}
      >
        Men faol ravishda ishlab chiqayotgan va saqlayotgan asosiy loyihalar —
        shaxsiy saytlar, Telegram bot starterlari va tajriba sifatidagi kompilyator loyihasi.
      </Paragraph>

      <section className="mt-8 w-full max-w-4xl">
        <div
          className="grid gap-4 md:grid-cols-2"
        >
          {PROJECTS.map(project => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className={`
                        rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-xs
                        text-white/60
                      `}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                >
                  <IconBrandGithub className="size-4" />
                  GitHub
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
                  >
                    <IconExternalLink className="size-4" />
                    Demo
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}
