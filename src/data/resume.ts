import type { Localized } from "#i18n";

export interface ExperienceItem {
  company: string;
  role: Localized;
  /** Year (`2020`) or year-month (`2020-06`). */
  from: string;
  /** Same format as `from`; undefined = present. */
  to?: string;
  highlights?: Localized<string[]>;
  stack?: string[];
}

export interface SkillGroup {
  label: Localized;
  items: string[];
}

export const resume = {
  headline: {
    uz: "Full-stack dasturchi, CTO",
    en: "Full-stack developer, CTO",
  } satisfies Localized,
  location: { uz: "Toshkent, O'zbekiston", en: "Tashkent, Uzbekistan" } satisfies Localized,
  summary: {
    uz: "2020-yildan beri web loyihalar ustida ishlayman: landing saytlardan rekruting platformasi backendigacha. 2022-yildan CTO.",
    en: "Working on web projects since 2020, from landing pages to a recruiting platform backend. CTO since 2022.",
  } satisfies Localized,

  experience: [
    {
      company: "Linkva",
      role: { uz: "Full-stack dasturchi, CTO", en: "Full-stack developer, CTO" },
      from: "2024",
    },
    {
      company: "Zakiy",
      role: { uz: "Full-stack dasturchi, CTO", en: "Full-stack developer, CTO" },
      from: "2022",
      to: "2024",
      highlights: {
        uz: [
          "O'rta va yirik bizneslarga IT yechimlar: AsiaAutoCredit, Uymakon, AsiaMobile, Novza Eshiklari, BestKimPaint, Dewilux, MIO Beauty.",
          "Next.js da tez ishlaydigan saytlar qurdim; mavjud sahifalarni audit qilib, UI/UX redesign va SEO yaxshilash ishlarini olib bordim.",
        ],
        en: [
          "Delivered IT solutions for mid-size and large businesses: AsiaAutoCredit, Uymakon, AsiaMobile, Novza Eshiklari, BestKimPaint, Dewilux, MIO Beauty.",
          "Built fast Next.js sites, audited existing ones, led UI/UX redesigns and SEO improvements.",
        ],
      },
      stack: ["Next.js", "TypeScript"],
    },
    {
      company: "JOBO",
      role: { uz: "Full-stack dasturchi", en: "Full-stack developer" },
      from: "2021",
      to: "2022",
      highlights: {
        uz: [
          "Rekruting platformasi uchun backend arxitekturasini qurdim: Laravel (PHP) va MySQL.",
          "Frontendni Nuxt 3 da SSR bilan yozdim, sahifa metrikalari va SEO yaxshilandi.",
        ],
        en: [
          "Designed and built the backend for a recruiting platform on Laravel (PHP) and MySQL.",
          "Wrote the frontend in Nuxt 3 with SSR, which improved page metrics and SEO.",
        ],
      },
      stack: ["Laravel", "PHP", "MySQL", "Nuxt 3"],
    },
    {
      company: "Infoshop",
      role: { uz: "Frontend dasturchi", en: "Frontend developer" },
      from: "2020",
      to: "2021",
      highlights: {
        uz: [
          "Kichik va o'rta bizneslar uchun landing va biznes saytlar yasadim.",
          "SEO orqali sahifalarni qidiruvda yuqoriga chiqardim, sotuvga qaratilgan CTA landinglar qurdim.",
          "Loyihalar: Alhadaya, Atria.uz, AsiaAutoCredit.",
        ],
        en: [
          "Built landing pages and business sites for small and mid-size companies.",
          "Raised clients' search rankings with SEO work and built conversion-focused CTA landings.",
          "Projects: Alhadaya, Atria.uz, AsiaAutoCredit.",
        ],
      },
    },
  ] satisfies ExperienceItem[],

  skills: [
    { label: { uz: "Tillar", en: "Languages" }, items: ["TypeScript", "JavaScript", "SQL", "PHP", "Node.js", "Go"] },
    { label: { uz: "Frontend", en: "Frontend" }, items: ["React", "Next.js", "Vue", "Nuxt.js", "Svelte", "Tailwind CSS"] },
    { label: { uz: "Asboblar", en: "Tools" }, items: ["Git", "Docker", "GitHub Actions (CI/CD)", "Nix Flakes"] },
  ] satisfies SkillGroup[],

  spokenLanguages: [
    { name: { uz: "O'zbek", en: "Uzbek" }, level: { uz: "ona tili", en: "native" } },
    { name: { uz: "Ingliz", en: "English" }, level: { uz: "B2", en: "B2" } },
  ] satisfies { name: Localized; level: Localized }[],
};
