import type { Metadata } from "next";
import { Cloud } from "pixelarticons/react/Cloud";
import { Code } from "pixelarticons/react/Code";
import { Laptop } from "pixelarticons/react/Laptop";
import { Terminal } from "pixelarticons/react/Terminal";
import { ExternalLink } from "#components/ui/external-link";
import { type IconComponent, PageHeader, SectionTitle } from "#components/ui/heading";
import { uses, type UsesIcon } from "#data/uses";
import { getDictionary, pick } from "#i18n";
import { parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn } from "#utils";

const ICONS: Record<UsesIcon, IconComponent> = { laptop: Laptop, terminal: Terminal, code: Code, cloud: Cloud };

export async function generateMetadata(props: PageProps<"/[lang]/uses">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return localizedMetadata({ lang, path: "/uses", title: dict.uses.title, description: dict.uses.description });
}

export default async function UsesPage(props: PageProps<"/[lang]/uses">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader title={dict.uses.title} description={dict.uses.description} />

      <div className={cn("grid gap-x-12 gap-y-14 md:grid-cols-2")}>
        {uses.map(category => (
          <section key={category.label.en}>
            <SectionTitle icon={ICONS[category.icon]} className={cn("mb-5")}>{pick(category.label, lang)}</SectionTitle>
            <ul className={cn("divide-y divide-line border-y border-line")}>
              {category.items.map(item => (
                <li
                  key={item.name}
                  className={cn(`
                    flex flex-wrap items-baseline justify-between gap-x-4
                    gap-y-1 py-2.5
                  `)}
                >
                  {item.href
                    ? (
                        <ExternalLink
                          href={item.href}
                          className={cn("no-underline hover:underline")}
                        >
                          {item.name}
                        </ExternalLink>
                      )
                    : <span>{item.name}</span>}
                  {item.note && <span className={cn("text-sm text-muted")}>{pick(item.note, lang)}</span>}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
