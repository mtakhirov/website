# Content Architecture / Kontent Arxitekturasi

## English

This directory contains all the blog posts and articles for the website. The structure is designed to support both single-page posts and multi-part series, each with its own local assets.

### Structure

- **Single Post**: `content/<slug>/index.mdx`
- **Multi-part Series**: `content/<slug>/part-<n>/index.mdx`
- **Assets**: Every post or part has an `assets/` folder for images, videos, and other media.

### Frontmatter

Each `.mdx` file must start with a YAML frontmatter:

```yaml
---
title: "Post Title"
description: "Brief summary"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
published: true/false
---
```

---

## O'zbekcha

Ushbu katalog veb-sayt uchun barcha blog postlari va maqolalarini o'z ichiga oladi. Struktura bir sahifali postlarni ham, ko'p qismli seriyalarni ham qo'llab-quvvatlash uchun ishlab chiqilgan bo'lib, har birining o'z maxsus assetlari mavjud.

### Struktura

- **Oddiy Post**: `content/<slug>/index.mdx`
- **Ko'p qismli seriya**: `content/<slug>/part-<n>/index.mdx`
- **Assetlar**: Har bir post yoki qism rasmlar, videolar va boshqa media fayllar uchun `assets/` papkasiga ega.

### Frontmatter

Har bir `.mdx` fayli YAML frontmatter bilan boshlanishi shart:

```yaml
---
title: "Maqola sarlavhasi"
description: "Qisqacha mazmuni"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
published: true/false
---
```
