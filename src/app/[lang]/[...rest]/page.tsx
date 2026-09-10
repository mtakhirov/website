import { notFound } from "next/navigation";

/** Any unknown path under /[lang] renders the localized not-found page instead of the framework default. */
export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export default function CatchAllPage() {
  notFound();
}
