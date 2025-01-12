import type { Metadata } from "next";

export const blogListMetadata: Metadata = { title: "Blog List" };

export async function blogDetailMetadata(): Promise<Metadata> {
  return { title: "Blog Detail" };
}
