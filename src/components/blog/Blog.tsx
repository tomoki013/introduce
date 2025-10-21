"use client";
import {
  MotionSection,
  MotionH2,
  MotionP,
  MotionDiv,
} from "@/components/Motion";
import Link from "next/link";

export const Blog = () => {
  return (
    <MotionSection
      id="blog"
      className="mx-auto max-w-4xl scroll-mt-20 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            duration: 0.1,
            when: "beforeChildren",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <MotionH2
        className="mb-8 text-center text-3xl font-bold text-foreground"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        Technical Blog
      </MotionH2>
      <MotionP
        className="text-center leading-relaxed text-muted-foreground"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.2,
            },
          },
        }}
      >
        技術ブログ記事: あなたの課題解決能力をアピールする絶好の機会です。旅行ブログとは別に、開発中に直面した技術的な問題とその解決プロセスを記事にまとめます。「Next.jsで〇〇を実装した方法」や「AIアプリ開発での学び」といったテーマは、あなたの専門性を深く示すことができます。
      </MotionP>
      <MotionDiv
        className="mt-8 text-center"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.5,
              delay: 0.4,
            },
          },
        }}
      >
        <Link
          href="https://note.com/tomokichidiary"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          ブログを読む
        </Link>
      </MotionDiv>
    </MotionSection>
  );
};
