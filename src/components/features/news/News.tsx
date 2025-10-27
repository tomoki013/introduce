"use client";

import { NewsItem } from "@/lib/news";
import newsData from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";

type Props = {
  news?: NewsItem[];
  limit?: number;
};

export const News = ({ news = newsData as NewsItem[], limit = 5 }: Props) => {
  return (
    <ul className="space-y-4">
      {news.slice(0, limit).map((item, index) => (
        <li key={index} className="border-b border-border pb-2">
          <Link
            href={`/news/${item.id}`}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group"
          >
            <time dateTime={item.date} className="text-sm whitespace-nowrap">
              {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
            </time>
            <p className="text-primary group-hover:text-accent transition-colors">
              {item.title}
            </p>
          </Link>
          <div className="flex flex-wrap gap-2 mt-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
