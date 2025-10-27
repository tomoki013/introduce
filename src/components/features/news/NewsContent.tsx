"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { MotionDiv, MotionH1 } from "@/components/common/Motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { NewsItem } from "@/lib/news";

type Props = {
  item: NewsItem;
};

const getLinkText = (url: string) => {
  try {
    const hostname = new URL(url).hostname;
    if (hostname.includes("it.tomokichidiary.com")) {
      return `「ともきちのエンジニア成長記」で続きを読む`;
    }
    if (hostname.includes("qiita.com")) {
      return `Qiitaで続きを読む`;
    }
    return `${hostname.replace(/^www\./, "")}で続きを読む`;
  } catch (error) {
    return "続きを読む";
  }
};

export default function NewsContent({ item }: Props) {
  return (
    <>
      <article>
        <header className="mb-12 border-b pb-8">
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 flex items-center justify-center gap-4 text-sm text-muted-foreground"
          >
            <time dateTime={item.date}>
              {format(new Date(item.date), "yyyy年MM月dd日", { locale: ja })}
            </time>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </MotionDiv>
          <MotionH1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl"
          >
            {item.title}
          </MotionH1>
        </header>

        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="prose prose-lg mx-auto max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
          {item.link && item.link !== "/" && (
            <p className="mt-8 text-center">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {getLinkText(item.link)}
              </Link>
            </p>
          )}
        </MotionDiv>
      </article>

      <div className="mt-16 text-center">
        <Link
          href="/news"
          className="inline-flex items-center gap-x-2 text-primary transition-colors hover:text-primary-focus"
        >
          <FiArrowLeft />
          <span>ニュース一覧へ戻る</span>
        </Link>
      </div>
    </>
  );
}
