"use client";

import { useState } from "react";
import { News, NewsItem } from "@/components/features/news/News";

type Props = {
  news: NewsItem[];
  tags: string[];
};

export const NewsList = ({ news, tags }: Props) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredNews = selectedTag
    ? news.filter((item) => item.tags.includes(selectedTag))
    : news;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedTag(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            !selectedTag ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag
                ? "bg-primary text-primary-foreground"
                : "bg-muted"
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
