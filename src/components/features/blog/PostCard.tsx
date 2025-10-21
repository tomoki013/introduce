import Link from "next/link";
import { PostData } from "@/lib/blog";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

type Props = {
  post: PostData;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="rounded-lg border bg-card p-4 transition-transform hover:scale-105">
        <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
        <time dateTime={post.date} className="text-sm text-muted-foreground">
          {format(new Date(post.date), "yyyy年MM月dd日", { locale: ja })}
        </time>
      </div>
    </Link>
  );
}
