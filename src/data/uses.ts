import type { Localized } from "#i18n";

export interface UsesItem {
  name: string;
  note?: Localized;
  href?: string;
}

export type UsesIcon = "laptop" | "terminal" | "code" | "cloud";

export interface UsesCategory {
  label: Localized;
  icon: UsesIcon;
  items: UsesItem[];
}

export const uses: UsesCategory[] = [
  {
    label: { uz: "Qurilmalar", en: "Hardware" },
    icon: "laptop",
    items: [
      { name: "MacBook Pro M2", note: { uz: "asosiy ish mashinasi", en: "main work machine" } },
      { name: "PC i7-12 (Windows 11)", note: { uz: "gaming uchun", en: "for gaming" } },
    ],
  },
  {
    label: { uz: "Muharrir va terminal", en: "Editor & terminal" },
    icon: "terminal",
    items: [
      { name: "VS Code", note: { uz: "asosiy editor", en: "main editor" }, href: "https://code.visualstudio.com" },
      { name: "Neovim", note: { uz: "yengil ishlar uchun", en: "for quick edits" }, href: "https://neovim.io" },
      { name: "iTerm2", note: { uz: "terminal", en: "terminal" }, href: "https://iterm2.com" },
      { name: "Claude Code", note: { uz: "terminaldagi AI juftlik-dasturchi", en: "AI pair programmer in the terminal" }, href: "https://claude.com/claude-code" },
      { name: "oh-my-zsh", note: { uz: "zsh konfiguratsiyasi", en: "zsh config" }, href: "https://ohmyz.sh" },
      { name: "just", note: { uz: "buyruqlar uchun task runner", en: "task runner for project commands" }, href: "https://just.systems" },
    ],
  },
  {
    label: { uz: "Dasturlash", en: "Development" },
    icon: "code",
    items: [
      { name: "Bun", note: { uz: "runtime va package manager", en: "runtime and package manager" }, href: "https://bun.sh" },
      { name: "Next.js", note: { uz: "React ilovalar uchun", en: "for React apps" }, href: "https://nextjs.org" },
      { name: "Go: Chi / Gin", note: { uz: "Go'da HTTP routerlar", en: "HTTP routers in Go" } },
      { name: "Tailwind CSS", note: { uz: "CSS", en: "CSS" }, href: "https://tailwindcss.com" },
      { name: "PostgreSQL", note: { uz: "ma'lumotlar bazasi", en: "database" }, href: "https://www.postgresql.org" },
    ],
  },
  {
    label: { uz: "Xizmatlar", en: "Services" },
    icon: "cloud",
    items: [
      { name: "Vercel", note: { uz: "Next.js ilovalar hostingi", en: "Next.js app hosting" }, href: "https://vercel.com" },
      { name: "Contabo", note: { uz: "asosiy VPS server", en: "main VPS" }, href: "https://contabo.com" },
      { name: "GitHub", note: { uz: "kod va CI", en: "code and CI" }, href: "https://github.com" },
      { name: "Cloudflare", note: { uz: "DNS", en: "DNS" }, href: "https://www.cloudflare.com" },
      { name: "Notion", note: { uz: "yozuvlar va rejalar", en: "notes and planning" }, href: "https://www.notion.com" },
    ],
  },
];
