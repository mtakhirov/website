import type { Metadata } from "next";

export const projectListMetadata: Metadata = {
  title: "Projects list",
};

export async function projectDetailMetadata(): Promise<Metadata> {
  return { title: "Project detail" };
}
