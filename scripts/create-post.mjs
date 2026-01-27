import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

async function createPost() {
  const args = process.argv.slice(2);
  const slug = args[0];
  const part = args[1]; // optional

  if (!slug) {
    console.error(`Xatolik: Slug ko'rsatilishi shart! Misol: bun scripts / create - post.mjs my - post`);
    process.exit(1);
  }

  const baseDir = join(process.cwd(), "content", slug);
  const targetDir = part ? join(baseDir, `part-${part}`) : baseDir;
  const assetsDir = join(targetDir, "assets");
  const filePath = join(targetDir, "index.mdx");

  const date = new Date().toISOString().split("T")[0];
  const title = slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  const frontmatter = `---
title: "${title}${part ? ` (${part}-qism)` : ""}"
description: ""
date: "${date}"
tags: []
published: false
---

# ${title}${part ? ` (${part}-qism)` : ""}

Bu yerga maqola matnini yozing...
`;

  try {
    await mkdir(assetsDir, { recursive: true });
    await writeFile(filePath, frontmatter, { flag: "wx" });
    console.log(`✅ Post yaratildi: ${filePath}`);
  }
  catch (err) {
    if (err.code === "EEXIST") {
      console.error(`❌ Xatolik: Fayl yoki papka allaqachon mavjud!`);
    }
    else {
      console.error(`❌ Xatolik yuz berdi:`, err);
    }
  }
}

createPost();
