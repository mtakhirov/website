import type { ComponentPropsWithoutRef, ComponentType, ReactNode, SVGProps } from "react";
import { cn } from "#utils";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

interface PageHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  className?: string;
}

/** Top of every route: pixel-font H1 + one-line description. */
export function PageHeader({ title, description, aside, className }: PageHeaderProps) {
  return (
    <header className={cn("mb-10 flex flex-wrap items-end justify-between gap-6", className)}>
      <div className={cn("max-w-2xl")}>
        <h1 className={cn(`
          font-pixel text-4xl leading-none font-bold
          md:text-5xl
        `)}
        >
          {title}
        </h1>
        {description && <p className={cn("mt-3 max-w-[60ch] text-muted")}>{description}</p>}
      </div>
      {aside}
    </header>
  );
}

interface SectionTitleProps extends ComponentPropsWithoutRef<"h2"> {
  /** Pixel icon drawn in the accent colour before the text. Falls back to a plain square. */
  icon?: IconComponent;
}

export function SectionTitle({ icon: Icon, className, children, ...props }: SectionTitleProps) {
  return (
    <h2
      className={cn(`flex items-center gap-2.5 font-pixel text-2xl leading-none`, className)}
      {...props}
    >
      {Icon
        ? <Icon className={cn("size-[0.85em] shrink-0 text-accent crisp")} aria-hidden />
        : <span className={cn("size-[0.5em] shrink-0 bg-accent")} aria-hidden />}
      <span>{children}</span>
    </h2>
  );
}
