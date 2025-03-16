export default function ResumeLoading() {
  return (
    <main className="container">
      <div className="space-y-8">
        {/* Header with download button skeleton */}
        <div className="flex items-center justify-between">
          <div className="h-12 w-36 animate-pulse rounded-lg bg-white/10" />
          <div className="h-10 w-40 animate-pulse rounded-lg bg-white/10" />
        </div>

        {/* Experience section skeleton */}
        <section className="space-y-6">
          <div className="h-8 w-36 animate-pulse rounded-lg bg-white/10" />
          <div className="space-y-8">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-7 w-2/3 animate-pulse rounded bg-white/10" />
                <div className="flex justify-between">
                  <div className="h-5 w-40 animate-pulse rounded bg-white/10" />
                  <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
                </div>
                <div className="space-y-2 pl-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-4 w-full animate-pulse rounded bg-white/10"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education section skeleton */}
        <section className="space-y-6">
          <div className="h-8 w-36 animate-pulse rounded-lg bg-white/10" />
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="h-7 w-2/3 animate-pulse rounded bg-white/10" />
              <div className="flex justify-between">
                <div className="h-5 w-48 animate-pulse rounded bg-white/10" />
                <div className="h-5 w-32 animate-pulse rounded bg-white/10" />
              </div>
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
            </div>
          </div>
        </section>

        {/* Skills section skeleton */}
        <section className="space-y-6">
          <div className="h-8 w-24 animate-pulse rounded-lg bg-white/10" />
          <div className="space-y-4">
            {/* Technical skills */}
            <div className="space-y-3">
              <div className="h-6 w-32 animate-pulse rounded bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div
                    key={`tech-${index}`}
                    className="h-7 w-24 animate-pulse rounded-full bg-white/10"
                  />
                ))}
              </div>
            </div>
            
            {/* Soft skills */}
            <div className="space-y-3">
              <div className="h-6 w-32 animate-pulse rounded bg-white/10" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={`soft-${index}`}
                    className="h-7 w-28 animate-pulse rounded-full bg-white/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}