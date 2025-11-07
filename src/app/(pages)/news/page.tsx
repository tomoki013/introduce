import { NewsList } from "@/components/features/news/NewsList";
import { newsTags } from "@/lib/news";
import { Metadata } from "next";
import { getAllNews } from "@/app/(pages)/news/lib";

export const metadata: Metadata = {
  title: "News",
  description: "All the latest news.",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="m-16">
      <h1 className="text-3xl font-bold mb-8">News</h1>
      <NewsList
        news={news}
        tags={newsTags}
      />
    </div>
  );
}
