import type { FC } from "react";

const BlogListLoading: FC = () => {
  return (
    <main className="container">
      <section className="space-y-8">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`skeleton-${index}`}
            className="space-y-4 rounded-lg bg-white/5 p-4"
          >
            {/* Title skeleton */}
            <div className="group inline-flex w-full items-center gap-1">
              <div className="h-8 w-2/3 animate-pulse rounded-md bg-white/10" />
            </div>

            {/* Description skeleton */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
            </div>

            <hr className="text-white/10" />

            {/* Tags and date skeleton */}
            <section className="flex justify-between">
              <div className="inline-flex gap-2">
                {Array.from({ length: 3 }).map((_, tagIndex) => (
                  <div
                    key={`tag-${tagIndex}`}
                    className="h-7 w-16 animate-pulse rounded-full bg-white/10"
                  />
                ))}
              </div>

              <div className="h-7 w-24 animate-pulse rounded-full bg-white/10" />
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}

export default BlogListLoading; 