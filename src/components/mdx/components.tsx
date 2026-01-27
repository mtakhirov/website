import type { MDXComponents } from "mdx/types";
import NextImage from "next/image";
import Link from "next/link";
import * as React from "react";
import { cn } from "#utils";
import { Highlighter } from "../ui/highlighter";
import { Image } from "../ui/image";

/**
 * MDX Components following the design system
 * Uses CSS variables from tailwind.css for consistent theming
 */
export function useMDXComponents(components: MDXComponents, slug?: string): MDXComponents {
  const resolveAssetPath = (src?: string) => {
    if (!src) return src;
    if (src.startsWith("http")) return src;
    if (src.startsWith("/")) return src;

    // Handle relative paths like ./assets/hero.png
    if (src.startsWith("./") || src.startsWith("../")) {
      if (!slug) return src;
      const normalizedPath = src.replace(/^\.\//, ""); // Remove ./
      // For ../ we'd need more logic, but typically it's just ./assets/
      return `/api/content/${slug}/${normalizedPath}`;
    }

    return src;
  };

  return {
    // Headings
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          `
            mt-8 scroll-m-20 text-3xl font-bold tracking-tight text-foreground
            first:mt-0
            md:text-4xl
          `,
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          `
            mt-10 scroll-m-20 border-b border-border pb-2 text-2xl font-semibold
            tracking-tight text-foreground
            first:mt-0
          `,
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          `
            mt-8 scroll-m-20 text-xl font-semibold tracking-tight
            text-foreground
          `,
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          `
            mt-6 scroll-m-20 text-lg font-semibold tracking-tight
            text-foreground
          `,
          className,
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }) => (
      <h5
        className={cn(
          `
            mt-4 scroll-m-20 text-base font-semibold tracking-tight
            text-foreground
          `,
          className,
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }) => (
      <h6
        className={cn(
          `
            mt-4 scroll-m-20 text-sm font-semibold tracking-tight
            text-foreground
          `,
          className,
        )}
        {...props}
      />
    ),

    // Paragraphs and text
    p: ({ className, ...props }) => (
      <p
        className={cn(
          "leading-7 text-foreground/80 [&:not(:first-child)]:mt-5",
          className,
        )}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong
        className={cn("font-semibold text-foreground", className)}
        {...props}
      />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),

    // Links
    a: ({ className, href, ...props }) => {
      const isExternal = href?.startsWith("http");
      const Component = isExternal ? "a" : Link;

      return (
        <Component
          href={href as string}
          className={cn(
            `
              font-medium text-primary underline decoration-primary/30
              underline-offset-4
            `,
            "transition-colors hover:decoration-primary",
            className,
          )}
          {...(isExternal && {
            target: "_blank",
            rel: "noopener noreferrer",
          })}
          {...props}
        />
      );
    },

    // Lists
    ul: ({ className, ...props }) => (
      <ul
        className={cn("my-5 ml-6 list-disc text-foreground/80 [&>li]:mt-2", className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn("my-5 ml-6 list-decimal text-foreground/80 [&>li]:mt-2", className)}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li
        className={cn("leading-7", className)}
        {...props}
      />
    ),

    // Blockquote
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "my-6 border-l-4 border-primary/50 bg-muted/30 py-3 pr-4 pl-6",
          "text-foreground/80 italic [&>p]:mt-0",
          className,
        )}
        {...props}
      />
    ),

    // Horizontal rule
    hr: ({ className, ...props }) => (
      <hr
        className={cn("my-8 border-border", className)}
        {...props}
      />
    ),

    // Code blocks
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          "my-5 overflow-x-auto rounded-lg border border-border bg-card p-4",
          "text-sm leading-relaxed",
          "[&>code]:bg-transparent [&>code]:p-0",
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          `
            relative rounded-sm bg-muted px-[0.4rem] py-[0.2rem] font-mono
            text-sm text-foreground
          `,
          className,
        )}
        data-line-numbers
        {...props}
      />
    ),

    // Table
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-x-auto">
        <table
          className={cn("w-full border-collapse text-sm", className)}
          {...props}
        />
      </div>
    ),
    thead: ({ className, ...props }) => (
      <thead
        className={cn("border-b border-border", className)}
        {...props}
      />
    ),
    tbody: ({ className, ...props }) => (
      <tbody
        className={cn("[&>tr:last-child]:border-0", className)}
        {...props}
      />
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(`
          border-b border-border transition-colors
          hover:bg-muted/30
        `, className)}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          "h-10 px-4 text-left align-middle font-semibold text-foreground",
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn("p-4 align-middle text-foreground/80", className)}
        {...props}
      />
    ),

    // Image
    img: ({ className, alt, src, ...props }) => {
      const resolvedSrc = resolveAssetPath(src);
      console.log(resolvedSrc);

      // Check if it's a video file disguised as an image markdown
      const isVideo = src?.match(/\.(mp4|webm|ogg)$/i);

      if (isVideo) {
        return (
          <span
            className={cn(`
              my-6 block overflow-hidden rounded-lg border border-border
            `)}
          >
            <video
              src={resolvedSrc}
              controls
              className={cn("w-full", className)}
              {...props}
            />
          </span>
        );
      }

      return (
        <span
          className={cn(`
            my-6 block overflow-hidden rounded-lg border border-border
          `)}
        >
          <Image
            src={resolvedSrc || ""}
            alt={alt || ""}
            width={1200}
            height={675}
            priority="lcp"
            className={cn("w-full object-cover", className)}
          />
        </span>
      );
    },

    // Custom Image component for optimized images
    Image: ({ className, alt, src, ...props }: React.ComponentProps<typeof NextImage>) => {
      console.log(src);
      const resolvedSrc = typeof src === "string" ? resolveAssetPath(src) : src;
      console.log(resolvedSrc);
      return (
        <span
          className={cn(`
            my-6 block overflow-hidden rounded-lg border border-border
          `)}
        >
          <NextImage
            alt={alt || ""}
            src={resolvedSrc || "/"}
            className={cn("w-full", className)}
            {...props}
          />
        </span>
      );
    },

    // Video component
    video: ({ className, src, ...props }) => (
      <span
        className={cn(`
          my-6 block overflow-hidden rounded-lg border border-border
        `)}
      >
        <video
          src={resolveAssetPath(src)}
          controls
          className={cn("w-full", className)}
          {...props}
        />
      </span>
    ),

    // Details/Summary
    details: ({ className, ...props }) => (
      <details
        className={cn(
          "my-5 rounded-lg border border-border bg-card p-4",
          "[&[open]>summary]:mb-3",
          className,
        )}
        {...props}
      />
    ),
    summary: ({ className, ...props }) => (
      <summary
        className={cn(
          "cursor-pointer font-medium text-foreground",
          "hover:text-primary",
          className,
        )}
        {...props}
      />
    ),

    // Custom components
    Callout,
    Card: MDXCard,
    Highlight: Highlighter,

    ...components,
  };
}

// Custom Callout component
interface CalloutProps {
  type?: "info" | "warning" | "error" | "success";
  title?: string;
  children: React.ReactNode;
}

function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: "border-primary/50 bg-primary/5 text-primary",
    warning: "border-yellow-500/50 bg-yellow-500/5 text-yellow-600 dark:text-yellow-400",
    error: "border-destructive/50 bg-destructive/5 text-destructive",
    success: "border-green-500/50 bg-green-500/5 text-green-600 dark:text-green-400",
  };

  const icons = {
    info: "💡",
    warning: "⚠️",
    error: "❌",
    success: "✅",
  };

  return (
    <div className={cn("my-5 rounded-lg border-l-4 p-4", styles[type])}>
      {title && (
        <div className="mb-2 flex items-center gap-2 font-semibold">
          <span>{icons[type]}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-foreground/80 [&>p]:mt-0">{children}</div>
    </div>
  );
}

// Custom Card component for MDX
interface MDXCardProps {
  title?: string;
  children: React.ReactNode;
}

function MDXCard({ title, children }: MDXCardProps) {
  return (
    <div className="my-5 rounded-lg border border-border bg-card p-5">
      {title && (
        <h4 className="mb-3 font-semibold text-foreground">{title}</h4>
      )}
      <div className="text-foreground/80 [&>p]:mt-0">{children}</div>
    </div>
  );
}
