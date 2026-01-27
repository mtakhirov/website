import type { Metadata } from "next";

import Link from "next/link";
import pfpMain from "#assets/images/pfp/main.png";
import { PersonJsonLd, WebSiteJsonLd } from "#components/seo/json-ld";
import { Card, CardContent, CardHeader, CardTitle } from "#components/ui/card";
import { DitherShader } from "#components/ui/dither-shader";
import { Heading } from "#components/ui/heading";
import { Paragraph } from "#components/ui/paragraph";
import { cn } from "#utils";

export const metadata: Metadata = {
  title: "Muhammaddiyor Takhirov | Software Developer",
  description: "Portfolio of Muhammaddiyor Tohirov — full‑stack TypeScript developer building production‑ready web platforms and Telegram bots with Node.js, React/Next.js, and Vue/Nuxt.",
  alternates: {
    canonical: "/",
  },
};

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "PHP", "Go"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Laravel", "REST APIs"],
  },
  {
    category: "Infra & Tools",
    items: ["PostgreSQL", "MySQL", "Redis", "Nginx", "Docker", "Nix/NixOS", "Git", "Linux"],
  },
];

export default function Home({ }: PageProps<"/">) {
  return (
    <div className="relative isolate min-h-screen pt-10 pb-20">
      <PersonJsonLd />
      <WebSiteJsonLd />

      {/* Magma Theme Background Blobs */}
      <div
        aria-hidden
        aria-disabled
        className={cn(`pointer-events-none absolute inset-0 -z-10 hidden`)}
      >
        <div
          className={cn(`
            absolute -top-[10%] -left-[10%] size-[500px] rounded-full
            bg-orange-500/10 blur-[120px] filter
            dark:bg-orange-600/5
          `)}
        />
        <div
          className={cn(`
            absolute top-[20%] -right-[10%] size-[400px] rounded-full
            bg-red-600/10 blur-[100px] filter
            dark:bg-red-700/5
          `)}
        />
      </div>

      <div className="flex flex-col gap-16 md:gap-24">
        {/* Hero Section */}
        <section
          className={cn(`
            grid gap-10
            md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center
          `)}
        >
          {/* Text column */}
          <div className="space-y-6">
            {/* Eyebrow / status pill */}
            <div
              className={cn(`
                inline-flex items-center gap-2 rounded-full border
                border-orange-500/20 bg-orange-500/5 px-3 py-1 font-mono
                text-[11px] tracking-[0.18em] text-orange-300/90 uppercase
              `)}
            >
              <span className="size-1 rounded-full bg-orange-400" />
              <span>Night-time builder & learner</span>
            </div>

            <div className="space-y-4">
              <Heading size="h1" className="tracking-tight">
                Muhammaddiyor Tohirov
              </Heading>

              <Paragraph
                variant="mono"
                className="max-w-xl text-muted-foreground"
              >
                Full‑stack TypeScript developer — Node.js, React/Next.js va Vue/Nuxt
                yordamida foydalanuvchilar uchun qulay, tezkor va ishonchli
                web platformalar hamda Telegram botlar yarataman.
              </Paragraph>
            </div>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/projects"
                className={cn(`
                  inline-flex items-center justify-center rounded-full
                  bg-primary px-5 py-2.5 text-sm font-medium text-black
                  transition-transform
                  hover:scale-[1.02]
                  active:scale-95
                `)}
              >
                Loyihalarimni ko&apos;rish
              </Link>

              <Link
                href="/blog"
                className={cn(`
                  inline-flex items-center justify-center rounded-full border
                  border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium
                  text-foreground backdrop-blur-md transition-colors
                  hover:border-primary/40 hover:bg-white/10
                `)}
              >
                Blog postlarimni o&apos;qish
              </Link>
            </div>

            <div
              className={cn(`
                flex flex-wrap gap-6 pt-4 font-mono text-xs
                text-muted-foreground
              `)}
            >
              <div>
                <div className="text-foreground">7+ yil</div>
                <div className="text-xs text-muted-foreground/80">tajriba</div>
              </div>
              <div>
                <div className="text-foreground">10+ project</div>
                <div className="text-xs text-muted-foreground/80">production / side</div>
              </div>
              {/* <div>
                <div className="text-foreground">Open-source</div>
                <div className="text-xs text-muted-foreground/80">community ga hissa</div>
              </div> */}
            </div>
          </div>

          <div
            aria-hidden
            className="group relative mx-auto hidden w-full max-w-xs"
          >
            <div
              className={cn(`
                absolute -top-4 left-1/2 z-10 w-max -translate-x-1/2
                rounded-full border border-white/10 bg-black/60 px-3 py-1
                font-mono text-[11px] text-white/70
                shadow-[0_12px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl
              `)}
            >
              <span className="text-orange-400">●</span>
              {" "}
              Production-grade frontend & backend
            </div>

            <div
              className={cn(`
                relative aspect-square w-full overflow-hidden rounded-3xl border
                border-white/10 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.65)]
                backdrop-blur-xl transition-all duration-500
                group-hover:-translate-y-1 group-hover:border-orange-500/40
                group-hover:bg-white/10
              `)}
            >
              <DitherShader
                src={pfpMain.src}
                colorMode="custom"
                customPalette={["#000000", "#FFFFFF"]}
                gridSize={1}
                pixelRatio={0.01}
                className={cn(`
                  size-full rounded-3xl opacity-95 transition-opacity
                  group-hover:opacity-100
                `)}
              />
            </div>

            <div
              className={cn(`
                pointer-events-none absolute -inset-4 -z-10 rounded-3xl
                bg-gradient-to-tr from-orange-500/30 via-red-500/20
                to-transparent opacity-80 blur-2xl transition-opacity
                duration-700
                group-hover:opacity-100
              `)}
            />
          </div>
        </section>

        {/* Bio Section */}
        <section className="max-w-3xl space-y-6">
          <Heading size="h2">About Me</Heading>

          <div className="space-y-4">
            <Paragraph variant="mono" className="text-muted-foreground/90">
              Salom! Men Tohirov Muhammaddiyor Shuhrat o&apos;g&apos;li — Toshkentlik self‑taught
              full‑stack dasturchiman. 2019-yildan beri Node.js, TypeScript, React/Next.js,
              Vue/Nuxt va PHP/Laravel bilan korporativ saytlar, e‑commerce platformalar
              va ichki tizimlar ustida ishlayman.
            </Paragraph>

            <Paragraph variant="mono" className="text-muted-foreground/90">
              Ish faoliyatim davomida Zakiy, Adson, JOBO va Infoshop kabi kompaniyalar
              uchun backend va frontend qismlarini ishlab chiqqanman, SEO va performansni
              yaxshilaganman, hamda Telegram botlar orqali biznes jarayonlarini
              avtomatlashtirganman. Bo&apos;sh vaqtda esa takhirov.uz, jovo‑lang va
              telegram-bot-starter kabi shaxsiy loyihalarni rivojlantiraman.
            </Paragraph>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <Heading size="h2">Skills & Technologies</Heading>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {SKILLS.map(skill => (
              <Card
                key={skill.category}
                size="sm"
                className={cn(`
                  border-white/5 bg-white/[0.02] backdrop-blur-sm transition-all
                  duration-300
                  hover:border-orange-500/20 hover:bg-white/[0.04]
                `)}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="font-mono text-sm text-foreground/80">
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.items.map(item => (
                      <span
                        key={item}
                        className={cn(`
                          rounded-md border border-white/5 bg-white/5 px-2
                          py-0.5 font-mono text-[10px] text-muted-foreground
                          transition-colors
                          hover:bg-white/10 hover:text-foreground
                        `)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-4">
          <Heading size="h2">Contact</Heading>

          <Paragraph variant="mono" className="text-muted-foreground">
            Menga
            {" "}
            <Link
              href="https://github.com/mtakhirov"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(`
                text-foreground underline decoration-orange-500/30
                underline-offset-4 transition-all
                hover:text-orange-500 hover:decoration-orange-500
              `)}
            >
              GitHub
            </Link>
            {" "}
            orqali bog&apos;lanishingiz mumkin.
          </Paragraph>
        </section>
      </div>
    </div>
  );
}
