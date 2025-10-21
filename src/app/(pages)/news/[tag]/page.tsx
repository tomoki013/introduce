import { News } from "@/components/features/news/News";
import news from "@/data/news.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const tags = Array.from(new Set(news.flatMap((item) => item.tags)));
  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const tag = params.tag;
  return {
    title: `News tagged with "${tag}"`,
    description: `All news tagged with "${tag}".`,
  };
}

export default async function TaggedNewsPage(props: {
  params: Promise<{ tag: string }>;
}) {
  const params = await props.params;
  const tag = params.tag;
  const filteredNews = news.filter((item) =>
    item.tags.map((t) => t.toLowerCase()).includes(tag)
  );

  if (filteredNews.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        News tagged with &quot;{tag}&quot;
      </h1>
      <News news={filteredNews} />
    </div>
  );
}
