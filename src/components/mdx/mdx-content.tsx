import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { useMDXComponents } from "./components";

interface MDXContentProps {
  source: string;
  slug?: string;
}

export function MDXContent({ source, slug }: MDXContentProps) {
  const components = useMDXComponents({}, slug);

  return (
    <MDXRemote
      source={source}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypePrettyCode,
              {
                theme: "github-dark-default",
                keepBackground: true,
                defaultLang: "plaintext",
              },
            ],
          ],
        },
      }}
    />
  );
}
