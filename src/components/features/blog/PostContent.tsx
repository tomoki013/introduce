"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { MotionDiv, MotionH1 } from "@/components/common/Motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function PostContent({ title, date, contentHtml }: Props) {
  return (
    <>
      <article>
        <header className="mb-12 border-b pb-8">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-center text-sm text-muted-foreground"
          >
            <time dateTime={date}>
              {format(new Date(date), "yyyy年MM月dd日", { locale: ja })}
            </time>
          </MotionDiv>
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl"
          >
            {title}
          </MotionH1>
        </header>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg mx-auto max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      <div className="mt-16 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center gap-x-2 text-primary transition-colors hover:text-primary-focus"
        >
          <FiArrowLeft />
          <span>ブログ一覧へ戻る</span>
        </Link>
      </div>
    </>
  );
}
