"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#utils";

type NavigationItemProps = {
  //
} & React.ComponentProps<typeof Link>;

function NavigationItem({ className, children, ...props }: NavigationItemProps) {
  const pathname = usePathname();

  const href = props.href?.toString() || "/";
  const isActive = href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href);

  return (
    <Link
      aria-current={isActive}
      className={cn([
        `relative h-7.5 content-center rounded-full px-4`,
        `text-muted-foreground transition-colors duration-200`,
        `hover:text-accent-foreground`,
        `
          aria-current:font-medium aria-current:text-foreground
          aria-current:anchor/active-navigation-list
        `,
        className,
      ])}
      {...props}
    >
      {children}
    </Link>
  );
}

export default NavigationItem;
export { NavigationItem };
