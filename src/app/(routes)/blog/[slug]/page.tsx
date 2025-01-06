import "#features/mdx/styles";
import { BlogDetailPage, blogDetailMetadata } from "#views/blog";

export {
  generateBlogDetailStaticParams as generateStaticParams,
  blogDetailDynamicParams as dynamicParams,
} from "#views/blog/config";

export const generateMetadata = blogDetailMetadata;
export default BlogDetailPage;
