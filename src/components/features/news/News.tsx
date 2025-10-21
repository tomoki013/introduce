"use client";

import newsData from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";

export type NewsItem = {
  date: string;
  title: string;
  url: string;
  tags: string[];
};

type Props = {
  news?: NewsItem[];
};

export const News = ({ news = newsData }: Props) => {
  return (
    <ul className="space-y-2">
      {news.map((item, index) => (
        <li
          key={index}
          className="flex flex-col border-b border-border py-4 sm:flex-row sm:items-baseline sm:gap-4"
        >
          <time
            dateTime={item.date}
            className="mb-1 text-sm text-muted-foreground sm:mb-0 sm:w-24"
          >
            {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
          </time>
          <div className="flex-grow">
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-accent"
            >
              {item.title}
            </Link>
          </div>
          <div className="mt-2 flex flex-wrap gap-2 sm:mt-0 sm:flex-shrink-0 sm:justify-end">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news/${tag.toLowerCase()}`}
                className="block rounded-full border border-primary px-3 py-1 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
};
