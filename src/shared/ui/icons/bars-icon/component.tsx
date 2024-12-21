import type React from "react";
import type { IconProps } from "#entities";

import { cn } from "#shared/utils";

export default (props: IconProps): React.ReactElement => {
  const {
    fill = "none",
    strokeWidth = 1.5,
    viewBox = "0 0 24 24",
    stroke = "currentColor",
    xmlns = "http://www.w3.org/2000/svg",
    className,
    ...restProps
  } = props;

  return (
    <svg
      xmlns={xmlns}
      fill={fill}
      viewBox={viewBox}
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={cn("size-6", className)}
      {...restProps}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};
