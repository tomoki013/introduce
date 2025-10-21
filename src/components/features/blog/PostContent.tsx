"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { MotionDiv, MotionH1 } from "@/components/common/Motion";

type Props = {
  title: string;
  date: string;
  contentHtml: string;
};

export default function PostContent({ title, date, contentHtml }: Props) {
  return (
    <article>
      <MotionH1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-4xl font-bold"
      >
        {title}
      </MotionH1>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8 text-muted-foreground"
      >
        <time dateTime={date}>
          {format(new Date(date), "yyyy年MM月dd日", { locale: ja })}
        </time>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
