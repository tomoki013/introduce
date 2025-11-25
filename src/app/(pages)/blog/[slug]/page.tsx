import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PostDetail from "@/components/features/blog/PostDetail";

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths;
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: post.title,
      description: post.excerpt || "Blog post",
    };
  } catch {
    return {
      title: "Post Not Found",
    };
  }
}

export default async function PostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  try {
    const post = await getPostBySlug(params.slug);
    return (
      <div className="min-h-screen py-24 px-4 md:px-8">
        <PostDetail post={post} />
      </div>
    );
  } catch {
    notFound();
  }
}
