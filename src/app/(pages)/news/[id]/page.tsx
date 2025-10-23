import { Section } from "@/components/common/Section";
import news from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return news.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = news.find((item) => item.id === id);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.content.slice(0, 120),
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const item = news.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <article className="prose dark:prose-invert">
        <h1 className="text-3xl font-bold">{item.title}</h1>
        <time dateTime={item.date} className="text-sm text-muted-foreground">
          {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
        </time>
        <div className="mt-4">{item.content}</div>
      </article>
      <div className="mt-8 text-center">
        <Link href="/news" className="text-primary hover:underline">
          ニュース一覧へ戻る
        </Link>
      </div>
    </Section>
  );
}
