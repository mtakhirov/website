import type { Metadata } from "next";

export const blogListMetadata: Metadata = { title: "Blog List" };

export const blogDetailMetadata = async (): Promise<Metadata> => {
  return { title: "Blog Detail" };
};
