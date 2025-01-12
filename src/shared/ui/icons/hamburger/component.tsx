import type { IconProps } from "#shared/ui/icons";
import type React from "react";

import { cn } from "#shared/utils";

export const IconHamburger: React.FC<IconProps> = ({
  fill = "none",
  strokeWidth = 1.5,
  viewBox = "0 0 24 24",
  stroke = "currentColor",
  xmlns = "http://www.w3.org/2000/svg",
  className,
  ...props
}) => (
  <svg
    xmlns={xmlns}
    fill={fill}
    viewBox={viewBox}
    strokeWidth={strokeWidth}
    stroke={stroke}
    className={cn("size-6", className)}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);
