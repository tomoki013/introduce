import { getAllPosts } from "@/lib/blog";
import PostCard from "@/components/features/blog/PostCard";
import { Section } from "@/components/common/Section";
import { MotionH1, MotionDiv } from "@/components/common/Motion";

export default function BlogIndex() {
  const allPosts = getAllPosts();

  return (
    <Section>
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <MotionH1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-4xl font-bold"
        >
          Blog
        </MotionH1>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {allPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </MotionDiv>
      </div>
    </Section>
  );
}
