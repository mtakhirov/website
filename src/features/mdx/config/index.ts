import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import env from "#env";

export const DEFAULT_OPTIONS: MDXRemoteProps["options"] = {
  parseFrontmatter: true,
  mdxOptions: {
    baseUrl: import.meta.url,
    development: env.IS_DEV,
    jsx: true,
  },
};
