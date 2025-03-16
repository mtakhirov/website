import { AlertTriangle, Sparkles } from "lucide-react";

export const AlertBanner = () => {
  return (
    <div className="z-50 w-full bg-gradient-to-r from-amber-500/90 to-red-500/90 px-4 py-2 text-center text-white backdrop-blur supports-[backdrop-filter]:bg-amber-500/40">
      <div className="container flex items-center gap-2 text-xs font-medium sm:text-sm">
        <AlertTriangle className="size-4 animate-pulse sm:size-5 shrink-0" />

        <div className="shrink overflow-hidden">
          <p className="flex items-center gap-1 w-max">
            <div className="flex items-center gap-1 w-max animate-alert-banner">
              <span className="inline-flex items-center gap-1 w-max text-nowrap">Testing in production like a pro!</span>

              <span className="">|</span>

              <span className="inline-flex items-center gap-1 w-max text-nowrap">
                Built with Cursor AI for science
                <Sparkles className="size-4" />
              </span>

              <span className="">|</span>
            </div>

            <div className="flex items-center gap-1 w-max animate-alert-banner">
              <span className="inline-flex items-center gap-1 w-max text-nowrap">Testing in production like a pro!</span>

              <span className="">|</span>

              <span className="inline-flex items-center gap-1 w-max text-nowrap">
                Built with Cursor AI for science
                <Sparkles className="size-4" />
              </span>

              <span className="">|</span>
            </div>

            <div className="flex items-center gap-1 w-max animate-alert-banner">
              <span className="inline-flex items-center gap-1 w-max text-nowrap">Testing in production like a pro!</span>

              <span className="">|</span>

              <span className="inline-flex items-center gap-1 w-max text-nowrap">
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