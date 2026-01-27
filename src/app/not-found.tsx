import type { Metadata } from "next";
import { NotFoundClient } from "#components/widget/not-found-client";

export const metadata: Metadata = {
  title: "404 - Sahifa topilmadi",
  description: "Siz qidirayotgan sahifa mavjud emas yoki o'chirilgan.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return <NotFoundClient />;
}
