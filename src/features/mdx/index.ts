import type { CompileMDXResult, MDXRemoteProps } from "next-mdx-remote/rsc";

import { compileMDX } from "next-mdx-remote/rsc";
import { DEFAULT_COMPONENTS } from "#features/mdx/config";

import remarkGfm from "remark-gfm";
import remarkGithub from "remark-github";
import { remarkAlert } from "remark-github-blockquote-alert";

import { createHighlighterCore } from "shiki/core";
import {
  transformerNotationDiff,
  transformerNotationFocus,
  transformerRemoveLineBreak,
} from "@shikijs/transformers";
import rehypeShikiFromHighlighter, {
  type RehypeShikiCoreOptions,
} from "@shikijs/rehype/core";
import rehypeSlug from "rehype-slug";

async function createHighlighter() {
  return await createHighlighterCore({
    themes: [import("@shikijs/themes/vitesse-black")],
    langs: [
      import("@shikijs/langs/typescript"),
      import("@shikijs/langs/ts"),
      import("@shikijs/langs/tsx"),
      import("@shikijs/langs/javascript"),
      import("@shikijs/langs/js"),
      import("@shikijs/langs/jsx"),
    ],
    loadWasm: import("shiki/wasm"),
  });
}

interface ParseMdxFn {
  <T = object>(
    source: MDXRemoteProps["source"],
    components?: MDXRemoteProps["components"],
    options?: MDXRemoteProps["options"],
  ): Promise<CompileMDXResult<T>>;
}

export const parseMDX: ParseMdxFn = async (source, $components, $options) => {
  const highlighter = await createHighlighter();
  const hOptions: RehypeShikiCoreOptions = {
    theme: "vitesse-black",
    addLanguageClass: true,
    inline: "tailing-curly-colon",
    transformers: [
      transformerNotationDiff(),
      transformerNotationFocus(),
      transformerRemoveLineBreak(),
    ],
  };

  const components = Object.assign(DEFAULT_COMPONENTS ?? {}, $components ?? {});

  const options = Object.assign(
    {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypeShikiFromHighlighter, highlighter, hOptions],
          [rehypeSlug],
        ],
        remarkPlugins: [
          [remarkGfm, {}],
          [remarkGithub, { repository: "mtakhirov/website" }],
          [remarkAlert, { tagName: "blockquote", legacyTitle: true }],
        ],
      },
    },
    $options,
  );

  return await compileMDX({
    source,
    components,
    options,
  });
};
