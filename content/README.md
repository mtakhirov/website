# Content

Blog posts live here as MDX. Every post is a directory; every language is a file.

```
content/
  <slug>/
    index.uz.mdx        # Uzbek version
    index.en.mdx        # English version (optional)
    assets/             # images/videos referenced as ./assets/<file>
  <series-slug>/
    part-1/index.uz.mdx # multi-part series
    part-2/index.uz.mdx
```

- A post is shown in a language only if that file exists. If the visitor's language is missing, the default (`uz`) is rendered with a notice.
- A legacy `index.mdx` is treated as `index.uz.mdx`.
- Create a post: `bun run post <slug> [--lang uz|en] [--part N]`.

## Frontmatter

```yaml
---
title: "Post title"
description: "One or two sentences. Used in lists and OpenGraph."
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"   # optional
tags: ["tag1", "tag2"]
published: true
---
```

## Extras

- Callouts: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`. Custom title: `> [!TIP/Maslahat]`.
- Code blocks: ` ```ts title="file.ts" {2-4} ` highlights lines 2 to 4; `showLineNumbers` adds numbers.
- Images: `![alt](./assets/photo.png)` resolves through `/api/content/<slug>/assets/photo.png`.

---

# Kontent (O'zbekcha)

Har bir yozuv alohida papka, har bir til alohida fayl: `index.uz.mdx`, `index.en.mdx`.
Tarjima bo'lmasa, o'zbekcha nusxa ogohlantirish bilan ko'rsatiladi.
Yangi yozuv: `bun run post <slug> --lang uz`.
