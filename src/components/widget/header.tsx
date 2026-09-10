import type { Dictionary, Locale } from "#i18n";
import Link from "next/link";
import { LangSwitch } from "#components/ui/lang-switch";
import { ThemeToggle } from "#components/ui/theme-toggle";
import { navItems } from "#config/site";
import { route } from "#i18n";
import { cn } from "#utils";
import { NavLink } from "./nav-link";

interface HeaderProps {
  lang: Locale;
  dict: Dictionary;
}

export function Header({ lang, dict }: HeaderProps) {
  const links = navItems.map(key => ({ key, href: route(lang, `/${key}`), label: dict.nav[key] }));

  return (
    <header className={cn(`
      sticky top-0 z-(--z-header) print-hidden border-b border-line bg-bg/95
      backdrop-blur-sm
    `)}
    >
      <div className={cn(`
        mx-auto flex h-14 max-w-5xl items-center gap-8 px-4
        md:px-6
      `)}
      >
        <Link
          href={route(lang)}
          className={cn("flex items-center gap-2 font-pixel text-xl font-bold")}
          aria-label={dict.nav.home}
        >
          <span className={cn("size-3 bg-accent")} aria-hidden />
          takhirov
        </Link>

        <nav aria-label="Primary" className={cn("hidden gap-5 text-sm md:flex")}>
          {links.map(link => <NavLink key={link.key} href={link.href}>{link.label}</NavLink>)}
        </nav>

        <div className={cn("ml-auto flex items-center gap-2")}>
          <LangSwitch current={lang} label={dict.common.language} />
          <ThemeToggle label={dict.common.theme} />
        </div>
      </div>

      <nav
        aria-label="Primary"
        className={cn(`
          flex h-10 items-center gap-5 overflow-x-auto border-t border-line px-4
          text-sm
          md:hidden
        `)}
      >
        {links.map(link => <NavLink key={link.key} href={link.href}>{link.label}</NavLink>)}
      </nav>
    </header>
  );
}
