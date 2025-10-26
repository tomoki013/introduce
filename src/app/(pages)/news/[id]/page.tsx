import { Section } from "@/components/common/Section";
import news from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

type NewsItem = {
  id: string;
  date: string;
  title: string;
  url: string;
  link?: string;
  tags: string[];
  content: string;
};

const typedNews: NewsItem[] = news as NewsItem[];

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return typedNews.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const item = typedNews.find((item) => item.id === id);

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
  const item = typedNews.find((item) => item.id === id);

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <div className="container mx-auto max-w-3xl">
        <article>
          <header className="mb-12 border-b pb-8">
            <div className="mb-4 text-center text-sm text-muted-foreground">
              <time dateTime={item.date}>
                {format(new Date(item.date), "yyyy年MM月dd日", { locale: ja })}
              </time>
            </div>
            <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
              {item.title}
            </h1>
          </header>

          <div
            className="prose prose-lg mx-auto max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />

          {item.link && (
            <div className="mt-12 text-center">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-full border bg-card px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <FiExternalLink />
                <span>関連サイトを見る</span>
              </Link>
            </div>
          )}
        </article>

        <div className="mt-16 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-x-2 text-primary transition-colors hover:text-primary-focus"
          >
            <FiArrowLeft />
            <span>ニュース一覧へ戻る</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
