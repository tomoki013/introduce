import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/features/blog/PostCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Diary | Blog",
  description: "Notes and stories from my journey.",
};

export default function BlogIndex() {
  const allPosts = getAllPosts();

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-montserrat mb-4 tracking-tight">
            TRAVEL <span className="text-primary">DIARY</span>
          </h1>
          <p className="text-muted-foreground">
            Notes, thoughts, and stories from my technical and personal
            journeys.
          </p>
        </div>

        {allPosts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700">
            <p className="text-lg text-muted-foreground">
              No entries found in the logbook yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
