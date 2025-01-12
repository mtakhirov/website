import type { ParseMdxFn } from "#features/mdx";

import {
  createHighlighter,
  DEFAULT_OPTIONS,
  highlighterOptions,
  MDX_COMPONENTS,
} from "#features/mdx";
import { defineConfig } from "#shared/utils";
import rehypeShikiFromHighlighter from "@shikijs/rehype/core";
import { compileMDX } from "next-mdx-remote/rsc";

import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import { remarkAlert } from "remark-github-blockquote-alert";

export const parseMDX: ParseMdxFn = async (
  source,
  components = {},
  options = {},
) => {
  const highlighter = await createHighlighter();

  const $options: typeof options = {
    mdxOptions: {
      rehypePlugins: [
        [rehypeShikiFromHighlighter, highlighter, highlighterOptions],
        [rehypeSlug],
      ],
      remarkPlugins: [
        [remarkGfm, {}],
        [remarkGithub, { repository: "mtakhirov/website" }],
        [remarkAlert, { tagName: "blockquote", legacyTitle: true }],
      ],
    },
  };

  return await compileMDX({
    source,
    components: defineConfig(MDX_COMPONENTS, components),
    options: defineConfig(DEFAULT_OPTIONS, $options, options),
  });
};
