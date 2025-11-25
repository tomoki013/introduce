"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { NewsItem, NewsTag } from "@/lib/news";
import { useState } from "react";

interface TravelNewsListProps {
  news: NewsItem[];
  tags: readonly NewsTag[];
}

export default function TravelNewsList({ news, tags }: TravelNewsListProps) {
  const [selectedTag, setSelectedTag] = useState<NewsTag | "All">("All");

  const filteredNews =
    selectedTag === "All"
      ? news
      : news.filter((item) => item.tags.includes(selectedTag));

  return (
    <div className="space-y-8">
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setSelectedTag("All")}
          className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
            selectedTag === "All"
              ? "bg-primary text-white shadow-lg scale-105"
              : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
          }`}
        >
          ALL FLIGHTS
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
              selectedTag === tag
                ? "bg-primary text-white shadow-lg scale-105"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Flight Board */}
      <div className="overflow-hidden rounded-lg bg-slate-900 border-4 border-slate-700 shadow-2xl">
        <div className="grid grid-cols-[100px_1fr_auto] gap-4 bg-slate-800 p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700">
          <div className="hidden md:block">Date</div>
          <div>Announcement</div>
          <div className="text-right">Gate</div>
        </div>

        <div className="divide-y divide-slate-800">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_auto] gap-4 p-4 hover:bg-slate-800/50 transition-colors"
              >
                <div className="hidden md:flex items-center font-mono text-yellow-400">
                  {new Date(item.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                  })}
                </div>

                <div className="flex flex-col justify-center">
                  <span className="md:hidden text-xs text-yellow-400 font-mono mb-1">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                  <Link
                    href={`/news/${item.slug}`}
                    className="font-mono text-white group-hover:text-primary transition-colors text-lg md:text-xl"
                  >
                    {item.title}
                  </Link>
                  <div className="flex gap-2 mt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-slate-700 text-slate-300 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <span className="font-mono text-2xl font-bold text-primary group-hover:text-white transition-colors">
                    {index + 1}A
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 font-mono">
              NO FLIGHTS FOUND
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
