export default function ProjectsLoading() {
  return (
    <main className="container">
      <section className="space-y-8">
        {/* Title skeleton */}
        <div className="h-12 w-48 animate-pulse rounded-lg bg-white/10" />

        {/* Projects grid skeleton */}
        <div className="grid gap-6 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <article
              key={index}
              className="space-y-4 rounded-lg bg-white/5 p-6"
            >
              {/* Project title skeleton */}
              <div className="h-8 w-3/4 animate-pulse rounded-lg bg-white/10" />
              
              {/* Description skeleton */}
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              </div>

              {/* Technologies skeleton */}
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 3 }).map((_, techIndex) => (
                  <div
                    key={techIndex}
                    className="h-7 w-20 animate-pulse rounded-full bg-white/10"
                  />
                ))}
              </div>

              {/* Links skeleton */}
              <div className="flex gap-4">
                <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-6 w-24 animate-pulse rounded bg-white/10" />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
} 