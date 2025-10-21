import { NewsList } from "@/components/features/news/NewsList";
import news from "@/data/news.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "All the latest news.",
};

export default function NewsPage() {
  const tags = Array.from(new Set(news.flatMap((item) => item.tags)));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <NewsList news={news} tags={tags} />
    </div>
  );
}
