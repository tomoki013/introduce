import PostCard from "./PostCard";
import Link from "next/link";
import { Section } from "@/components/common/Section";
import { MotionH2, MotionDiv } from "@/components/common/Motion";
import { PostData } from "@/lib/blog";

type Props = {
  posts: PostData[];
};

export default function LatestPosts({ posts }: Props) {
  return (
    <Section>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <MotionH2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-3xl font-bold"
        >
          Latest Blog Posts
        </MotionH2>
        {posts.length === 0 && (
          <p className="text-center text-lg text-muted-foreground">
            No blog posts available.
          </p>
        )}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {posts.slice(0, 3).map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/blog"
            className="inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            View All Posts
          </Link>
        </MotionDiv>
      </div>
    </Section>
  );
}
