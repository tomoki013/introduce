"use client";

import { FaRegNewspaper } from "react-icons/fa";
import { MotionDiv, MotionH2 } from "@/components/common/Motion";
import { Section } from "@/components/common/Section";
import news from "@/data/news.json";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import Link from "next/link";

type Props = {
  limit?: number;
};

export const News = ({ limit }: Props) => {
  const limitedNews = limit ? news.slice(0, limit) : news;
  return (
    <Section>
      <div className="flex items-center gap-2">
        <FaRegNewspaper className="text-xl" />
        <MotionH2>News</MotionH2>
      </div>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 space-y-4"
      >
        <ul className="space-y-4">
          {limitedNews.map((item, index) => (
            <li key={index} className="border-b border-border pb-2">
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group"
              >
                <time
                  dateTime={item.date}
                  className="text-sm whitespace-nowrap"
                >
                  {format(new Date(item.date), "yyyy/MM/dd", { locale: ja })}
                </time>
                <p className="text-primary group-hover:text-accent transition-colors">
                  {item.title}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        {limit && (
          <div className="text-center">
            <Link
              href="/news"
              className="inline-block font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View All →
            </Link>
          </div>
        )}
      </MotionDiv>
    </Section>
  );
};
