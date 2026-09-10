import type { MDXComponents } from "mdx/types";
import type { Route } from "next";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ExternalLink } from "pixelarticons/react/ExternalLink";
import { cn } from "#utils";

const CALLOUT_LABELS: Record<string, string> = {
  note: "Note",
  tip: "Tip",
  important: "Important",
  warning: "Warning",
  caution: "Caution",
};

interface CalloutProps extends ComponentPropsWithoutRef<"div"> {
  "data-type"?: string;
  "data-title"?: string;
}

function Callout({ "data-type": type = "note", "data-title": title, children, className, ...props }: CalloutProps) {
  return (
    <div className={cn("callout", className)} data-type={type} role="note" {...props}>
      <span className={cn("callout-title")}>{title || CALLOUT_LABELS[type] || type}</span>
      {children}
    </div>
  );
}

/** Resolve `./assets/x.png` inside a post to the content API route. */
function resolveAsset(src: string | undefined, assetBase: string): string | undefined {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("/") || src.startsWith("data:")) return src;
  const clean = src.replace(/^\.\//, "");
  return `/api/content/${assetBase}/${clean}`;
}

function Anchor({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = /^(https?:)?\/\//.test(href);
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
        <ExternalLink
          className={cn("ml-0.5 inline-block size-3 align-baseline crisp")}
          aria-hidden
        />
      </a>
    );
  }
  if (href.startsWith("#")) {
    return <a href={href} {...props}>{children}</a>;
  }
  return <Link href={href as Route} {...props}>{children}</Link>;
}

export function getMDXComponents(assetBase: string): MDXComponents {
  return {
    a: Anchor,
    callout: Callout,
    img: ({ src, alt = "", ...props }: ComponentPropsWithoutRef<"img">) => (
      // Post assets have unknown dimensions; next/image would need width/height.
      // eslint-disable-next-line @next/next/no-img-element
      <img src={resolveAsset(typeof src === "string" ? src : undefined, assetBase)} alt={alt} loading="lazy" decoding="async" {...props} />
    ),
    video: ({ src, ...props }: ComponentPropsWithoutRef<"video">) => (
      <video src={resolveAsset(typeof src === "string" ? src : undefined, assetBase)} controls playsInline {...props} />
    ),
  };
}
