import type React from "react";

import path from "node:path";
import fs from "node:fs/promises";

import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export const BlogListPage: React.FC = async () => {
  const contentDir = path.resolve(process.cwd(), "content");
  const contentFiles = await fs.readdir(contentDir, { recursive: false });

  return (
    <main id="blog-list-page" className="container">
      {contentFiles.map((content) => (
        <Link
          key={`blog-post-${content}`}
          href={`/blog/${content}`}
          data-underline
        >
          <p className="group inline-flex items-center gap-1 text-white/70 hover:text-white/90">
            {content
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
            <MoveUpRightIcon className="size-3 stroke-[1.5] text-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-4 md:stroke-[2.5]" />
          </p>
        </Link>
      ))}
    </main>
  );
};
BlogListPage.displayName = "Blog list page";
