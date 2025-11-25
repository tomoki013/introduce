"use client";

import { PostData } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

interface TravelPostDetailProps {
  post: PostData & { contentHtml: string };
}

export default function TravelPostDetail({ post }: TravelPostDetailProps) {
  return (
    <article className="max-w-3xl mx-auto">
      <div className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Travel Diary
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700"
      >
        {/* Header Image */}
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={"/placeholder.jpg"} // Blog posts might not have coverImage in PostData type, need to check or fallback
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
            <div className="flex items-center gap-4 text-white/80 text-sm font-mono mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black font-montserrat text-white leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-montserrat prose-a:text-primary hover:prose-a:text-primary/80 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </motion.div>
    </article>
  );
}
