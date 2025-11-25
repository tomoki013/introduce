"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { NewsItem } from "@/lib/news";

interface TravelNewsProps {
  news: NewsItem[];
}

export default function TravelNews({ news }: TravelNewsProps) {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold font-montserrat tracking-wider flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
            FLIGHT UPDATES
          </h2>
          <div className="text-sm font-mono text-muted-foreground">
            LIVE STATUS
          </div>
        </div>

        <div className="overflow-hidden rounded-lg bg-slate-900 border-4 border-slate-700 shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_100px] gap-4 bg-slate-800 p-4 text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-700">
            <div className="hidden md:block">Date</div>
            <div>Announcement</div>
            <div className="text-right">Status</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-800">
            {news.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group grid grid-cols-[1fr_auto] md:grid-cols-[100px_1fr_100px] gap-4 p-4 hover:bg-slate-800/50 transition-colors"
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
                    className="font-mono text-white group-hover:text-primary transition-colors text-lg md:text-xl truncate"
                  >
                    {item.title}
                  </Link>
                </div>

                <div className="flex items-center justify-end">
                  <span className="inline-flex items-center px-2 py-1 rounded text-xs font-bold bg-green-500/20 text-green-400 animate-pulse">
                    ON TIME
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            View All Updates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
