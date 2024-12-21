import { BlogPage, BlogPageMetadata } from "#features/pages";

export const metadata = BlogPageMetadata;

export default async function Page() {
  return <BlogPage />;
}
