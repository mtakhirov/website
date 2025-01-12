import type { MDXRemoteProps } from "next-mdx-remote";

import { MdxH1Component } from "./h1";
import { MdxTableComponent } from "./table";

export const MDX_COMPONENTS: MDXRemoteProps["components"] = {
  h1: MdxH1Component,
  table: MdxTableComponent,
};

export { MdxH1Component, MdxTableComponent };
