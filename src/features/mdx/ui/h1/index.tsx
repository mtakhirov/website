import type React from "react";
import type { PropsWithChildren } from "react";

import NextLink from "next/link";

interface H1Props {
  id: string;
}

export const MdxH1Component: React.FC<PropsWithChildren<H1Props>> = ({
  id,
  ...props
}) => {
  return (
    <NextLink href={`#${id}`}>
      <h1 className="font-bold" {...props} />
    </NextLink>
  );
};
MdxH1Component.displayName = "h1 component for mdx";
