import { lang as getLang } from "next/root-params";
import { AnimatedDither } from "#components/ui/animated-dither";
import { ButtonLink } from "#components/ui/button";
import { Dither } from "#components/ui/dither";
import { getDictionary, route } from "#i18n";
import { parseLang } from "#lib/blog";
import { cn } from "#utils";

export default async function NotFound() {
  const lang = parseLang(await getLang());
  const dict = getDictionary(lang);

  return (
    <section className={cn(`
      grid gap-10 py-10
      md:grid-cols-[1fr_1fr] md:items-center
    `)}
    >
      <div>
        <p className={cn(`
          font-pixel text-7xl leading-none font-bold text-accent
          md:text-9xl
        `)}
        >
          {dict.notFound.title}
        </p>
        <h1 className={cn("mt-4 font-pixel text-3xl leading-tight")}>{dict.notFound.heading}</h1>
        <p className={cn("mt-3 max-w-[50ch] text-muted")}>{dict.notFound.text}</p>
        <ButtonLink href={route(lang)} variant="secondary" className={cn("mt-8")}>{dict.notFound.backHome}</ButtonLink>
      </div>

      <div className={cn("aspect-4/3 bg-surface p-2 text-fg pixel-border-2")}>
        <AnimatedDither
          seed="404"
          field="noise"
          noise={1}
          density={0.6}
          cols={64}
          rows={48}
          fps={6}
          className={cn("size-full")}
        >
          <Dither cols={64} rows={48} seed="404" field="noise" noise={1} density={0.6} />
        </AnimatedDither>
      </div>
    </section>
  );
}
