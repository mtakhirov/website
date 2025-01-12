import metadata from "#content/metadata";

export { blogDetailMetadata, blogListMetadata } from "./metadata";

export const blogDetailDynamicParams = false;

export async function generateBlogDetailStaticParams(): Promise<
  { slug: string }[]
> {
  return metadata.map(([slug]) => ({ slug }));
}
