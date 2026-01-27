import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

export function getAllPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  if (!fs.existsSync(CONTENT_DIR)) {
    return posts;
  }

  const slugs = fs.readdirSync(CONTENT_DIR);

  for (const slug of slugs) {
    const slugPath = path.join(CONTENT_DIR, slug);
    const stat = fs.statSync(slugPath);

    if (!stat.isDirectory()) continue;

    // Check for single post (index.mdx)
    const singlePostPath = path.join(slugPath, "index.mdx");
    if (fs.existsSync(singlePostPath)) {
      const post = getPostBySlug(slug);
      if (post && post.frontmatter.published) {
        posts.push(post);
      }
      continue;
    }

    // Check for multi-part series (part-1, part-2, etc.)
    const parts = fs.readdirSync(slugPath).filter(p => p.startsWith("part-"));
    for (const part of parts) {
      const partPath = path.join(slugPath, part, "index.mdx");
      if (fs.existsSync(partPath)) {
        const partSlug = `${slug}/${part}`;
        const post = getPostBySlug(partSlug);
        if (post && post.frontmatter.published) {
          posts.push(post);
        }
      }
    }
  }

  // Sort by date, newest first
  return posts.sort((a, b) =>
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
  );
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, slug, "index.mdx");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as BlogPostFrontmatter,
    content,
  };
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter(post => post.frontmatter.published);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map(post => post.slug);
}

export interface TOCHeading {
  id: string;
  text: string;
  level: number;
}

/**
 * Extract headings (h2, h3, h4) from MDX content for table of contents
 */
export function extractHeadings(content: string): TOCHeading[] {
  const headingRegex = /^(#{2,4})\s+(.+)$/gm;
  const headings: TOCHeading[] = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    // Generate slug-friendly ID
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/(^-|-$)/g, "");

    headings.push({ id, text, level });
  }

  return headings;
}
