import * as React from "react";
import { APP_DESCRIPTION, APP_NAME, SITE_URL } from "#app/config";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammaddiyor Takhirov",
    "url": SITE_URL,
    "image": `${SITE_URL}/pfp.jpg`,
    "jobTitle": "Software Developer",
    "description": APP_DESCRIPTION,
    "sameAs": [
      "https://github.com/mtakhirov",
    ],
    "knowsAbout": [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Web Development",
    ],
  };

  return <JsonLd data={data} />;
}

export function WebSiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": APP_NAME,
    "description": APP_DESCRIPTION,
    "url": SITE_URL,
    "author": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
      "url": "https://github.com/mtakhirov",
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
    },
  };

  return <JsonLd data={data} />;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  return <JsonLd data={data} />;
}

interface BlogPostingJsonLdProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  tags?: string[];
  image?: string;
}

export function BlogPostingJsonLd({
  title,
  description,
  datePublished,
  dateModified,
  url,
  tags = [],
  image,
}: BlogPostingJsonLdProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
      "url": "https://github.com/mtakhirov",
    },
    "publisher": {
      "@type": "Person",
      "name": "Muhammaddiyor Takhirov",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url,
    },
    ...(tags.length > 0 && { keywords: tags.join(", ") }),
    ...(image && { image }),
  };

  return <JsonLd data={data} />;
}
