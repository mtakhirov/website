import { blogDetailMetadata, BlogDetailPage } from "#views/blog";
import "#features/mdx/styles";

export {
  blogDetailDynamicParams as dynamicParams,
  generateBlogDetailStaticParams as generateStaticParams,
} from "#views/blog/config";

export const generateMetadata = blogDetailMetadata;
export default BlogDetailPage;
