import type { Metadata } from "next";
import { Building } from "pixelarticons/react/Building";
import { Languages } from "pixelarticons/react/Languages";
import { Zap } from "pixelarticons/react/Zap";
import { PageHeader, SectionTitle } from "#components/ui/heading";
import { PrintButton } from "#components/ui/print-button";
import { SocialIcon } from "#components/ui/social-icon";
import { Tag } from "#components/ui/tag";
import { site } from "#config/site";
import { resume } from "#data/resume";
import { getDictionary, pick } from "#i18n";
import { parseLang } from "#lib/blog";
import { localizedMetadata } from "#lib/metadata";
import { cn } from "#utils";

export async function generateMetadata(props: PageProps<"/[lang]/resume">): Promise<Metadata> {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);
  return localizedMetadata({ lang, path: "/resume", title: dict.resume.title, description: dict.resume.description });
}

/** `2020` stays `2020`; `2020-06` becomes `2020.06`. */
function period(value: string): string {
  return value.replace("-", ".");
}

const contactClass = `
  inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4
  hover:bg-fg hover:text-bg hover:no-underline
`;

export default async function ResumePage(props: PageProps<"/[lang]/resume">) {
  const lang = parseLang((await props.params).lang);
  const dict = getDictionary(lang);

  return (
    <>
      <PageHeader
        title={site.author}
        description={(
          <>
            {pick(resume.headline, lang)}
            <br />
            {pick(resume.location, lang)}
          </>
        )}
        aside={<PrintButton label={dict.resume.print} />}
      />

      <p className={cn("max-w-[65ch] text-lg leading-relaxed")}>{pick(resume.summary, lang)}</p>

      <ul className={cn("mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm")} aria-label={dict.resume.contact}>
        <li>
          <a href={`mailto:${site.email}`} className={cn(contactClass)}>
            <SocialIcon icon="mail" />
            {site.email}
          </a>
        </li>
        {site.socials.map(social => (
          <li key={social.href}>
            <a href={social.href} target="_blank" rel="noopener noreferrer" className={cn(contactClass)}>
              <SocialIcon icon={social.icon} />
              {social.label}
            </a>
          </li>
        ))}
      </ul>

      <section className={cn("mt-16")}>
        <SectionTitle icon={Building} className={cn("mb-8")}>{dict.resume.experience}</SectionTitle>
        <ol className={cn("border-l-2 border-line")}>
          {resume.experience.map((item) => {
            const highlights = item.highlights ? pick(item.highlights, lang) : [];
            return (
              <li
                key={`${item.company}-${item.from}`}
                className={cn(`
                  relative pb-10 pl-6
                  last:pb-0
                  md:grid md:grid-cols-[14ch_1fr] md:gap-8
                `)}
              >
                <span
                  className={cn(`absolute top-2 -left-[5px] size-2 bg-accent`)}
                  aria-hidden
                />
                <p className={cn("text-sm text-muted")}>
                  {period(item.from)}
                  {" "}
                  &rarr;
                  {" "}
                  {item.to ? period(item.to) : dict.common.present}
                </p>
                <div className={cn("mt-2 md:mt-0")}>
                  <h3 className={cn("font-pixel text-xl leading-tight")}>{pick(item.role, lang)}</h3>
                  <p className={cn("text-muted")}>{item.company}</p>
                  {highlights.length > 0 && (
                    <ul className={cn("mt-3 space-y-1.5 pl-4")}>
                      {highlights.map(highlight => (
                        <li
                          key={highlight}
                          className={cn(`
                            relative max-w-[70ch]
                            before:absolute before:top-[0.7em] before:-left-4
                            before:size-1.5 before:bg-fg
                          `)}
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.stack && (
                    <ul className={cn("mt-4 flex flex-wrap gap-1.5")}>
                      {item.stack.map(tech => <li key={tech}><Tag>{tech}</Tag></li>)}
                    </ul>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </section>

      <div className={cn("mt-16 grid gap-16 md:grid-cols-[3fr_2fr]")}>
        <section>
          <SectionTitle icon={Zap} className={cn("mb-6")}>{dict.resume.skills}</SectionTitle>
          <dl className={cn("space-y-5")}>
            {resume.skills.map(group => (
              <div key={group.label.en}>
                <dt className={cn("mb-2 text-sm text-muted")}>{pick(group.label, lang)}</dt>
                <dd className={cn("flex flex-wrap gap-1.5")}>
                  {group.items.map(item => (
                    <Tag
                      key={item}
                      className={cn(`text-fg`)}
                    >
                      {item}
                    </Tag>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <SectionTitle icon={Languages} className={cn("mb-6")}>{dict.resume.languages}</SectionTitle>
          <ul className={cn("space-y-1")}>
            {resume.spokenLanguages.map(item => (
              <li
                key={item.name.en}
                className={cn(`
                  flex justify-between gap-4 border-b border-line py-1.5
                `)}
              >
                <span>{pick(item.name, lang)}</span>
                <span className={cn("text-muted")}>{pick(item.level, lang)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
