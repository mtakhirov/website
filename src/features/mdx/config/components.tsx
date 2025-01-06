import type { MDXRemoteProps } from "next-mdx-remote";
import { cn } from "#shared/utils";

export const DEFAULT_COMPONENTS: MDXRemoteProps["components"] = {
  h1: ({ children, className, ...props }) => (
    <h1 className={cn("font-bold", className)} {...props}>
      {children}
    </h1>
  ),
  pre: ({ ...props }) => {
    // console.dir(props, { depth: Infinity });
    return <pre {...props} />;
  },
};
