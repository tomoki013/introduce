import { notFound } from "next/navigation";
import { Metadata } from "next";
import NewsDetail from "@/components/features/news/NewsDetail";
import { getAllNews, getNewsById } from "@/lib/news";

export async function generateStaticParams() {
  const news = await getAllNews();
  return news.map((item) => ({
    id: item.slug,
  }));
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = await getNewsById(id);
  if (!item) {
    return {
      title: "News Not Found",
    };
  }
  return {
    title: item.title,
    description: item.content.slice(0, 120),
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = await getNewsById(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <NewsDetail news={item} />
    </div>
  );
}
