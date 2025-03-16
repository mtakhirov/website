export default function AboutLoading() {
  return (
    <main className="container">
      <section className="space-y-8">
        {/* Title skeleton */}
        <div className="h-12 w-48 animate-pulse rounded-lg bg-white/10" />
        
        <div className="space-y-6 text-white/70">
          {/* Intro paragraph skeleton */}
          <div className="space-y-2">
            <div className="h-6 w-3/4 animate-pulse rounded bg-white/10" />
            <div className="h-6 w-1/2 animate-pulse rounded bg-white/10" />
          </div>
          
          {/* Background section skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-36 animate-pulse rounded-lg bg-white/10" />
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-4/6 animate-pulse rounded bg-white/10" />
            </div>
          </div>

          {/* Skills section skeleton */}
          <div className="space-y-4">
            <div className="h-8 w-24 animate-pulse rounded-lg bg-white/10" />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div
                  key={index}
                  className="h-8 w-24 animate-pulse rounded-full bg-white/10"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 