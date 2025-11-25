"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { PostData as Post } from "@/lib/blog";

interface TravelPostCardProps {
  post: Post;
}

export default function TravelPostCard({ post }: TravelPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <motion.article
        whileHover={{ y: -5 }}
        className="h-full bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col"
      >
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.coverImage || "/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/90 dark:bg-slate-900/90 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              <MapPin className="w-3 h-3" />
              {post.category}
            </span>
          </div>
        </div>

        <div className="p-6 flex flex-col grow">
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-3">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>

          <h3 className="text-xl font-bold font-montserrat mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-muted-foreground line-clamp-3 mb-6 grow">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center text-sm font-bold text-primary">
            Read Entry{" "}
            <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
