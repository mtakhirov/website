import type { Metadata } from "next";

import * as React from "react";
import { Separator } from "#components/ui/separator";
import { Heading } from "~/components/ui/heading";
import { Paragraph } from "~/components/ui/paragraph";

export const metadata: Metadata = {
  title: "Resume",
  description: "Professional experience and skills of Muhammaddiyor Tohirov — full‑stack TypeScript developer from Tashkent with 4+ years of experience in web platforms and Telegram bots.",
  alternates: {
    canonical: "/resume",
  },
};

const EXPERIENCE = [
  {
    title: "Full Stack Developer",
    company: "Zakiy — Tashkent, zaky.uz",
    period: "January 2023 — Present",
    description:
      "RESTful API lar (Express.js, NestJS, TypeScript), e‑commerce va korporativ saytlar (Vue/Nuxt 3, React/Next.js), Telegram botlar (jumladan Web App) ishlab chiqish.",
  },
  {
    title: "Full Stack Developer",
    company: "Adson — Tashkent, adson.uz",
    period: "September 2022 — December 2023",
    description:
      "Onlayn do‘konlar uchun Express.js (TypeScript) bilan API lar, Vue/Nuxt 3 va React/Next.js bilan landing va e‑commerce frontendlar, Node.js va grammY bilan Telegram botlar.",
  },
  {
    title: "Full Stack Developer",
    company: "JOBO — Tashkent, jobo.uz",
    period: "April 2022 — August 2023",
    description:
      "PHP/Laravel backend va Vue/Nuxt 3 frontend; SSR orqali SEO ni yaxshilash; Node.js va grammY yordamida vakansiyalar va nomzodlar ma’lumotlarini yig‘uvchi Telegram bot yaratish.",
  },
  {
    title: "Full Stack Developer",
    company: "Infoshop — Tashkent",
    period: "June 2020 — March 2022",
    description:
      "PHP/Laravel va React.js bilan korporativ saytlar va onlayn do‘konlar; Node.js, Telegraf.js va grammY yordamida Telegram botlar ishlab chiqish.",
  },
];

const EDUCATION = [
  {
    degree: "Secondary school",
    school: "Tashkent, Uzbekistan",
    period: "—",
    description:
      "Self‑taught dasturchi: 2019-yildan beri mustaqil o‘qish, real loyihalar va open‑source orqali bilimlarni chuqurlashtirish.",
  },
];

const SKILLS_LIST = [
  "JavaScript / TypeScript",
  "Node.js / Express.js / NestJS",
  "React / Next.js",
  "Vue.js / Nuxt 3",
  "PHP / Laravel",
  "PostgreSQL / MySQL / Redis",
  "Tailwind CSS",
  "Telegram bots (grammY / Telegraf)",
  "Nginx / Docker / Nix",
  "Git / GitHub / Linux",
  "REST API design / SEO & SSR",
];

export default function Resume({ }: PageProps<"/resume">) {
  return (
    <React.Fragment>
      <header className="mb-8">
        <Heading>Muhammaddiyor Takhirov</Heading>

        <Paragraph variant="mono" className="mt-2 text-white/70">
          Full‑stack TypeScript Developer — Tashkent, Uzbekistan
        </Paragraph>
      </header>

      <div className="w-full max-w-3xl">
        <section>
          <Heading size="h2">
            Experience
          </Heading>

          <Separator className="my-4" />

          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, index) => (
              <article key={index}>
                <div
                  className={`
                    flex flex-col justify-between gap-1
                    sm:flex-row sm:items-center
                  `}
                >
                  <h3 className="font-medium">{exp.title}</h3>
                  <span className="font-mono text-xs text-white/50">{exp.period}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-white/60">{exp.company}</p>
                <p className="mt-2 text-sm text-white/70">{exp.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <Heading size="h2">
            Education
          </Heading>

          <Separator className="my-4" />

          <div className="flex flex-col gap-6">
            {EDUCATION.map((edu, index) => (
              <article key={index}>
                <div
                  className={`
                    flex flex-col justify-between gap-1
                    sm:flex-row sm:items-center
                  `}
                >
                  <h3 className="font-medium">{edu.degree}</h3>
                  <span className="font-mono text-xs text-white/50">{edu.period}</span>
                </div>
                <p className="mt-1 font-mono text-sm text-white/60">{edu.school}</p>
                <p className="mt-2 text-sm text-white/70">{edu.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <Heading size="h2">
            Skills
          </Heading>

          <Separator className="my-4" />

          <div className="flex flex-wrap gap-2">
            {SKILLS_LIST.map(skill => (
              <span
                key={skill}
                className={`
                  rounded-full bg-white/5 px-3 py-1.5 font-mono text-sm
                  text-white/70
                `}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
