import { AlertTriangle, Sparkles } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="from-amber-500/90 supports-[backdrop-filter]:bg-amber-500/40 z-50 w-full bg-gradient-to-r to-red-500/90 px-4 py-2 text-center text-white backdrop-blur">
      <div className="container flex items-center gap-2 text-xs font-medium sm:text-sm">
        <AlertTriangle className="size-4 shrink-0 animate-pulse sm:size-5" />

        <div className="alert-splash shrink overflow-hidden">
          <p className="flex w-max items-center gap-1">
            <div className="flex w-max animate-alert-banner items-center gap-1">
              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Testing in production like a pro!
              </span>

              <span className="">|</span>

              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Built with Cursor AI for science
                <Sparkles className="size-4" />
              </span>

              <span className="">|</span>
            </div>

            <div className="flex w-max animate-alert-banner items-center gap-1">
              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Testing in production like a pro!
              </span>

              <span className="">|</span>

              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Built with Cursor AI for science
                <Sparkles className="size-4" />
              </span>

              <span className="">|</span>
            </div>

            <div className="flex w-max animate-alert-banner items-center gap-1">
              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Testing in production like a pro!
              </span>

              <span className="">|</span>

              <span className="inline-flex w-max items-center gap-1 text-nowrap">
                Built with Cursor AI for science
                <Sparkles className="size-4" />
              </span>

              <span className="">|</span>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};
