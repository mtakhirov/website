import type React from "react";

import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export const FooterWidget: React.FC = () => {
  return (
    <footer className="container mt-4 flex justify-between border-t border-white/20 py-4">
      <div className="min-w-1/2 text-left">
        <p className="inline-flex text-xs text-white/40 md:text-sm">
          <em>Thanks for visiting!</em>
        </p>
      </div>

      <div className="min-w-1/2 text-right">
        <Link
          href="https://github.com/mtakhirov/website"
          target="_blank"
          data-underline
        >
          <p className="group inline-flex items-center gap-1 text-xs text-white/40 hover:text-white/70 md:text-sm">
            Source Code
            <MoveUpRightIcon className="size-3 stroke-[1.5] text-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 md:size-4 md:stroke-[2.5]" />
          </p>
        </Link>
      </div>
    </footer>
  );
};
