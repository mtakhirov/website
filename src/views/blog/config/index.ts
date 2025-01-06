import metadata from "#content/metadata";

export { blogDetailMetadata, blogListMetadata } from "./metadata";

export const blogDetailDynamicParams = false;

export const generateBlogDetailStaticParams = async (): Promise<
  { slug: string }[]
> => {
  return metadata.map(([slug]) => ({ slug }));
};
