import { notFound } from "next/navigation";
import news from "@/data/news.json";
import { NewsItem } from "@/lib/news";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { Metadata } from "next";
import Link from "next/link";

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
    <article className="m-16">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{item.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <time dateTime={item.date}>
            {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
          </time>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      <div className="prose dark:prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: item.content }} />
        {item.link && (
          <p>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              続きを読む
            </Link>
          </p>
        )}
      </div>
    </article>
  );
}
