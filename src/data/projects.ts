import type { Localized } from "#i18n";

export interface Project {
  slug: string;
  name: string;
  /** Optional; shown on the card when present. */
  year?: number;
  description: Localized;
  stack: string[];
  /** Featured projects appear on the home page and at the top of /projects. */
  featured?: boolean;
  links?: { source?: string; live?: string };
}

export const projects: Project[] = [
  // Featured
  {
    slug: "fin",
    name: "Fin",
    description: {
      uz: "Telegram orqali xarajatlarni kuzatish, byudjet yuritish va moliyaviy xulosalar beradigan yordamchi.",
      en: "Finance assistant in Telegram: tracks expenses, manages budgets, sends financial insights.",
    },
    stack: ["Next.js"],
    featured: true,
    links: { source: "https://github.com/flakeforge/fin", live: "https://fin.takhirov.uz/" },
  },
  {
    slug: "kyuar",
    name: "kyuar",
    description: {
      uz: "Telegram ichida Web App sifatida ishlaydigan QR skaner va generator.",
      en: "QR scanner and generator that runs inside Telegram as a Web App.",
    },
    stack: ["Next.js"],
    featured: true,
    links: { source: "https://github.com/kayp-oss/kyuar" },
  },
  {
    slug: "minecraft",
    name: "minecraft",
    description: {
      uz: "Shaxsiy Minecraft SMP serveri.",
      en: "Private Minecraft SMP server.",
    },
    stack: [],
    featured: true,
    links: { live: "https://mc.kayp.uz" },
  },

  // Others
  {
    slug: "clean-water",
    name: "Clean-Water",
    description: {
      uz: "Mineral suv ishlab chiqaruvchi kompaniya uchun landing.",
      en: "Landing page for a mineral water producer.",
    },
    stack: ["React"],
  },
  {
    slug: "mio-beauty",
    name: "MIO Beauty",
    description: {
      uz: "Yuz parvarishi platformasi.",
      en: "Skincare platform.",
    },
    stack: ["React"],
    links: { live: "https://miobeauty.uz" },
  },
  {
    slug: "namuna",
    name: "Namuna",
    description: {
      uz: "Mebel kompaniyasi uchun showroom sayti.",
      en: "Showroom site for a furniture company.",
    },
    stack: ["Next.js"],
    links: { live: "https://namuna.uz" },
  },
  {
    slug: "uymakon",
    name: "Uymakon",
    description: {
      uz: "Uy-joy oldi-sotdisi uchun bozor platformasi.",
      en: "Marketplace for buying and selling homes.",
    },
    stack: ["Next.js"],
    links: { live: "https://uymakon.uz" },
  },
  {
    slug: "zukko",
    name: "Zukko",
    description: {
      uz: "3D modellar bozori.",
      en: "Marketplace for 3D models.",
    },
    stack: ["Next.js"],
    links: { live: "https://zukko.org" },
  },
  {
    slug: "novza-eshiklari",
    name: "Novza Eshiklari",
    description: {
      uz: "Eshik ishlab chiqaruvchi kompaniya uchun showroom platformasi.",
      en: "Showroom platform for a door manufacturer.",
    },
    stack: ["Next.js"],
  },
  {
    slug: "newcert",
    name: "Newcert",
    description: {
      uz: "Xalqaro va mahalliy sertifikatlar olishga yordam beradigan kompaniya platformasi.",
      en: "Platform for a company that helps clients get international and local certificates.",
    },
    stack: ["Next.js"],
  },
];
