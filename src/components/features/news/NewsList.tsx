"use client";

import { useState } from "react";
import { News } from "@/components/features/news/News";
import { NewsItem, NewsTag } from "@/lib/news";

type Props = {
  news: NewsItem[];
  tags: readonly NewsTag[];
};

export const NewsList = ({ news, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState<NewsTag | null>(null);
  const filteredNews = selectedTag
    ? news.filter((item) => item.tags.includes(selectedTag))
    : news;

  const baseClasses =
    "rounded-full border px-4 py-1 text-sm transition-colors";
  const activeClasses = "border-primary bg-primary text-primary-foreground";
  const inactiveClasses =
    "border-border bg-transparent text-muted-foreground hover:bg-muted";

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTag(null)}
          className={`${baseClasses} ${
            !selectedTag ? activeClasses : inactiveClasses
          }`}
        >
          すべて
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`${baseClasses} ${
              selectedTag === tag ? activeClasses : inactiveClasses
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <News news={filteredNews} />
    </div>
  );
};
