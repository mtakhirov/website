import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { remarkCallout } from "#lib/remark-callout";
import { getMDXComponents } from "./components";

interface MDXContentProps {
  source: string;
  assetBase: string;
}

export function MDXContent({ source, assetBase }: MDXContentProps) {
  return (
    <MDXRemote
      source={source}
      components={getMDXComponents(assetBase)}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkCallout],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: { light: "github-light-default", dark: "github-dark-default" },
                keepBackground: false,
                bypassInlineCode: true,
                defaultLang: "plaintext",
              },
            ],
          ],
        },
      }}
    />
  );
}
