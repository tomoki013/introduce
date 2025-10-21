import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";
import { Section } from "@/components/common/Section";
import PostContent from "@/components/features/blog/PostContent";

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths.map((p) => ({ slug: p.params.slug }));
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  return (
    <Section>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <PostContent
          title={post.title}
          date={post.date}
          contentHtml={post.contentHtml}
        />
      </div>
    </Section>
  );
}
