"use client";

import { NewsItem } from "@/lib/news";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";

interface TravelNewsDetailProps {
  news: NewsItem;
}

export default function TravelNewsDetail({ news }: TravelNewsDetailProps) {
  return (
    <article className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
      {/* Header Strip */}
      <div className="h-2 bg-linear-to-r from-primary via-secondary to-accent" />

      <div className="p-8 md:p-12">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Flight Board
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-6">
            {news.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider"
              >
                <Tag className="w-3 h-3" /> {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-black font-montserrat mb-6 text-slate-900 dark:text-white leading-tight">
            {news.title}
          </h1>

          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-8 border-b border-slate-100 dark:border-slate-700 pb-8">
            <Calendar className="w-4 h-4" />
            {new Date(news.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          <div
            className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-montserrat prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
        </motion.div>
      </div>
    </article>
  );
}
