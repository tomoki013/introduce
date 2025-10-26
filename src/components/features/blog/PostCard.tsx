import Link from "next/link";
import { PostData } from "@/lib/blog";
import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  post: PostData;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-lg border bg-card p-6 transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:shadow-primary/20"
    >
      <article>
        <div className="mb-2 flex items-center gap-x-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>
            {format(new Date(post.date), "yyyy年MM月dd日", { locale: ja })}
          </time>
        </div>
        <h3 className="mb-3 text-2xl font-bold leading-tight tracking-tighter text-primary transition-colors group-hover:text-primary-focus">
          {post.title}
        </h3>
        <p className="mb-4 text-muted-foreground line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center gap-x-2 font-semibold text-primary transition-transform duration-300 ease-in-out group-hover:translate-x-1">
          <span>Read More</span>
          <FiArrowRight />
        </div>
      </article>
    </Link>
  );
}
