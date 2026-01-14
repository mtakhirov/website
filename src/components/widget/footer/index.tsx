import { IconChevronUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { cn } from "#utils";

function Footer() {
  return (
    <footer className={cn`
      container mx-auto mt-4 flex justify-between border-t border-white/20 py-4
    `}
    >
      <div className="min-w-1/2 text-left">
        <p className={cn`inline-flex text-xs text-white/40 md:text-sm`}>
          <em>Thanks for visiting!</em>
        </p>
      </div>

      <div className="min-w-1/2 text-right">
        <Link
          href="https://github.com/mtakhirov/website"
          target="_blank"
          data-underline
        >
          <p className={cn`
            group inline-flex items-center gap-1 text-xs text-white/40
            hover:text-white/70
            md:text-sm
          `}
          >
            Source Code
            <IconChevronUpRight
              className={cn`
                size-4 text-red-400 transition-transform
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5
              `}
            />
          </p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
export { Footer };
