import type { Locale } from "#features/i18n";
import type React from "react";

import contentFiles from "#content/metadata";
import { CalendarDaysIcon, MoveUpRightIcon } from "lucide-react";
import { getLocale } from "next-intl/server";
import Link from "next/link";

function formatDateToString(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Oylar 0-indexed
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export const BlogListPage: React.FC = async () => {
  const locale = (await getLocale()) as Locale;

  const availableContents = contentFiles.filter(
    ([_, metadata]) => !!metadata[locale],
  );

  return (
    <main id="blog-list-page" className="container">
      <section className="space-y-8">
        {availableContents.map(([slug, metadata]) => (
          <div
            key={`content-${slug}`}
            className="space-y-4 rounded-lg bg-white/5 p-4"
          >
            <Link href={`/blog/${slug}`} data-underline>
              <h2 className="group inline-flex w-full items-center gap-1 text-2xl font-semibold text-white/70 hover:text-white/90">
                <span className="max-w-5/6 truncate whitespace-nowrap text-nowrap">
                  {metadata[locale]!.title}
                </span>

                <MoveUpRightIcon className="size-3 stroke-[1.5] text-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-4 md:stroke-[2.5]" />
              </h2>
            </Link>

            <p className="line-clamp-3 text-sm text-white/40">
              {metadata[locale]!.description}
            </p>

            <hr className="text-white/10" />

            <section className="flex justify-between">
              <div className="inline-flex gap-2">
                {metadata[locale]!.tags.map((tag) => (
                  <span
                    key={tag}
                    className="truncate rounded-full bg-white/10 px-2.5 py-1.5 font-mono text-xs text-white/40"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1.5 font-mono text-xs text-white/40">
                <CalendarDaysIcon className="size-3" />
                {formatDateToString(new Date(metadata[locale]!.createdAt))}
              </span>
            </section>
          </div>
        ))}
      </section>
    </main>
  );
};
BlogListPage.displayName = "Blog list page";
