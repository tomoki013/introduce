import { NewsList } from "@/components/features/news/NewsList";
import news from "@/data/news.json";
import { NewsItem, newsTags } from "@/lib/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description: "All the latest news.",
};

export default function NewsPage() {
  return (
    <div className="m-16">
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <NewsList
        news={news as NewsItem[]}
        tags={newsTags}
      />
    </div>
  );
}
