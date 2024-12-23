import type React from "react";

import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";

export const FooterWidget: React.FC = () => {
  return (
    <footer className="container mt-4 flex justify-between border-t border-white/20 py-4">
      <div className="min-w-1/2 text-left text-white/40">
        <em>Thanks for visiting!</em>
      </div>

      <div className="min-w-1/2 text-right">
        <Link
          href="https://github.com/mtakhirov/website"
          target="_blank"
          data-underline
        >
          <p className="group inline-flex items-center gap-1 text-white/40 hover:text-white/70">
            Source Code
            <MoveUpRightIcon
              size={16}
              strokeWidth={2.5}
              className="text-red transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </p>
        </Link>
      </div>
    </footer>
  );
};
