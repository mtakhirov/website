"use client";

import type { Route } from "next";
import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "#utils";

interface NavLinkProps extends ComponentPropsWithoutRef<typeof Link> {
  href: Route;
}

export function NavLink({ href, className, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "border-b-2 py-1 whitespace-nowrap transition-colors",
        active
          ? "border-accent text-fg"
          : `border-transparent text-muted hover:text-fg`,
        className,
      )}
      {...props}
    />
  );
}
