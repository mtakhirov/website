import { env } from "#env";

export const SITE_URL = env.SITE_URL || "https://takhirov.uz";

export type SocialIcon = "github" | "x" | "telegram";

export const site = {
  name: "Takhirov",
  author: "Muhammaddiyor Tohirov",
  handle: "mtakhirov",
  url: SITE_URL,
  /** TODO: replace placeholders with real contact details. */
  email: "hello@takhirov.uz",
  socials: [
    { label: "GitHub", href: "https://github.com/mtakhirov", icon: "github" },
    { label: "X", href: "https://x.com/mtakhirov", icon: "x" },
    { label: "Telegram", href: "https://t.me/mtakhirov", icon: "telegram" },
  ] satisfies { label: string; href: string; icon: SocialIcon }[],
  themeColor: { light: "#f3f3f3", dark: "#101010" },
} as const;

export const navItems = ["blog", "projects", "resume", "uses"] as const;
export type NavKey = (typeof navItems)[number];
