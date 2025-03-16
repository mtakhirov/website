export default function BlogDetailLoading() {
  return (
    <main className="container">
      {/* Title skeleton */}
      <div className="mb-2">
        <div className="h-12 w-3/4 animate-pulse rounded-lg bg-white/10" />
      </div>

      {/* Tags skeleton */}
      <section className="mb-6">
        <div className="inline-flex gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={`tag-${index}`}
              className="h-7 w-16 animate-pulse rounded-full bg-white/10"
            />
          ))}
        </div>
      </section>

      {/* Content skeleton */}
      <section className="prose-mdx prose-base space-y-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={`paragraph-${index}`} className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-white/10" />
            <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
            <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
          </div>
        ))}
      </section>
    </main>
  );
}
