# takhirov.uz

Personal site and blog of Muhammaddiyor Tohirov. Next.js 16 App Router, Tailwind CSS v4, MDX.

## Stack

- Next.js 16.3 (Turbopack, React Compiler, typed routes, root params)
- React 19.3, TypeScript 6
- Tailwind CSS 4 with a custom pixel-accent design system (`src/assets/css/tailwind.css`)
- MDX via `next-mdx-remote`, Shiki dual-theme code blocks
- `next-themes` for light/dark, `uz`/`en` routing under `/[lang]`

## Develop

```bash
bun install
cp .env.example .env
bun run dev
```

| Command | What it does |
| --- | --- |
| `bun run dev` | dev server |
| `bun run build` | production build |
| `bun run lint` / `bun run fix` | ESLint |
| `bun run typecheck` | `next typegen` + `tsc` |
| `bun run post <slug> --lang uz` | new blog post (see `content/README.md`) |

## Structure

```
src/
  app/[lang]/        routes (home, blog, projects, resume, uses)
  app/api/content/   serves post assets from content/
  components/        ui primitives, widgets, mdx renderer
  data/              projects, resume, uses, now (edit these)
  i18n/              locales + dictionaries
  lib/               blog loader, dither generator, og images, metadata
  proxy.ts           `/` → `/uz` or `/en` (cookie, then Accept-Language)
content/             MDX posts, one file per language
```

## Editing content

- Site copy: `src/i18n/dictionaries/{uz,en}.ts`
- Projects, resume, uses: `src/data/*.ts`
- Contact links: `src/config/site.ts`
