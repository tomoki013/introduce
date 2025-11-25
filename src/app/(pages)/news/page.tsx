import NewsList from "@/components/features/news/NewsList";
import { newsTags } from "@/lib/news";
import { Metadata } from "next";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "Flight Updates | News",
  description: "Latest announcements and updates from Tomokichi Airlines.",
};

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-montserrat mb-4 tracking-tight">
            FLIGHT <span className="text-primary">SCHEDULE</span>
          </h1>
          <p className="text-muted-foreground">
            Stay updated with the latest announcements and logs.
          </p>
        </div>
        <NewsList news={news} tags={newsTags} />
      </div>
    </div>
  );
}
