import type { IconComponent } from "#components/ui/heading";
import type { SVGProps } from "react";
import { Github } from "pixelarticons/react/Github";
import { Mail } from "pixelarticons/react/Mail";
import { Telegram } from "pixelarticons/react/Telegram";
import { X } from "pixelarticons/react/X";
import { type SocialIcon as SocialIconId } from "#config/site";
import { cn } from "#utils";

const ICONS: Record<SocialIconId | "mail", IconComponent> = { github: Github, x: X, telegram: Telegram, mail: Mail };

interface SocialIconProps extends SVGProps<SVGSVGElement> {
  icon: SocialIconId | "mail";
}

/** Pixel glyph for a social/contact link. Decorative: pair it with visible text. */
export function SocialIcon({ icon, className = "crisp size-4", ...props }: SocialIconProps) {
  const Icon = ICONS[icon];
  return <Icon className={cn(className)} aria-hidden {...props} />;
}
