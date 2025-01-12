import type { CompileMDXResult, MDXRemoteProps } from "next-mdx-remote/rsc";

export type ParseMdxFn = <T extends object = object>(
  source: MDXRemoteProps["source"],
  components?: MDXRemoteProps["components"],
  options?: MDXRemoteProps["options"],
) => Promise<CompileMDXResult<T>>;
