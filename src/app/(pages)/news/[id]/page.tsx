import { notFound } from "next/navigation";
import news from "@/data/news.json";
import { NewsItem } from "@/lib/news";
import { Metadata } from "next";
import { Section } from "@/components/common/Section";
import NewsContent from "@/components/features/news/NewsContent";

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

type Props = {
  params: Promise<{ id:string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = news.find((item) => item.id === id) as NewsItem | undefined;
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
  const item = news.find((item) => item.id === id) as NewsItem | undefined;

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <NewsContent item={item} />
      </div>
    </Section>
  );
}
