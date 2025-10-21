
import { News } from "@/components/features/news/News";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "All the latest news.",
};

export default function NewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <News />
    </div>
  );
}
