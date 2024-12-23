import type { Metadata } from "next";

export const projectListMetadata: Metadata = {
  title: "Projects list",
};

export const projectDetailMetadata = async (): Promise<Metadata> => {
  return { title: "Project detail" };
};
