import type React from "react";
import type { Locale } from "#features/i18n";

import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import contentFiles from "#content/metadata";

export const BlogListPage: React.FC = async () => {
  const locale = (await getLocale()) as Locale;

  const availableContents = contentFiles.filter(
    ([_, metadata]) => !!metadata[locale],
  );

  return (
    <main id="blog-list-page" className="container">
      {availableContents.map(([slug, metadata]) => (
        <div key={`content-${slug}`}>
          <Link href={`/blog/${slug}`} data-underline>
            <p className="group inline-flex items-center gap-1 text-white/70 hover:text-white/90">
              {metadata[locale] && metadata[locale].title}
              <MoveUpRightIcon className="size-3 stroke-[1.5] text-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-4 md:stroke-[2.5]" />
            </p>
          </Link>
        </div>
      ))}
    </main>
  );
};
BlogListPage.displayName = "Blog list page";
