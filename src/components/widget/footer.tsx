import type { Dictionary, Locale } from "#i18n";
import { Zap } from "pixelarticons/react/Zap";
import { SocialIcon } from "#components/ui/social-icon";
import { site } from "#config/site";
import { cn } from "#utils";

const linkClass = `
  inline-flex items-center gap-1.5 underline decoration-1 underline-offset-4
  hover:bg-fg hover:text-bg hover:no-underline
`;

interface FooterProps {
  lang: Locale;
  dict: Dictionary;
}

export function Footer({ dict }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn("mt-24 print-hidden border-t border-line")}>
      <div className={cn(`
        mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8
        gap-y-3 px-4 py-8 text-sm text-muted
        md:px-6
      `)}
      >
        <p>
          <span className={cn("text-fg")}>{site.author}</span>
          {" "}
          &copy;
          {" "}
          {year}
        </p>

        <ul className={cn("flex flex-wrap gap-x-5 gap-y-2")}>
          {site.socials.map(social => (
            <li key={social.href}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" className={cn(linkClass)}>
                <SocialIcon icon={social.icon} />
                {social.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${site.email}`} className={cn(linkClass)}>
              <SocialIcon icon="mail" />
              {site.email}
            </a>
          </li>
        </ul>

        <p className={cn("inline-flex items-center gap-1.5")}>
          <Zap className={cn("size-4 text-muted crisp")} aria-hidden />
          {dict.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
