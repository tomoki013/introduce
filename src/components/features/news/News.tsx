"use client";

import { FaRegNewspaper } from "react-icons/fa";
import { MotionDiv, MotionH2 } from "@/components/common/Motion";
import { Section } from "@/components/common/Section";
import news from "@/data/news.json";
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {news.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 rounded-lg border border-border p-6"
        >
          <time
            dateTime={item.date}
            className="text-sm text-muted-foreground"
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
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news/${encodeURIComponent(tag)}`}
                className="block rounded-full border border-primary px-3 py-1 text-xs text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
