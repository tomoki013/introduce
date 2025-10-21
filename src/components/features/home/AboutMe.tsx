"use client";

import Image from "next/image";
import Link from "next/link";
import { MotionSection } from "@/components/common/Motion";

export default function AboutMe() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <MotionSection
      id="about"
      className="mx-auto max-w-4xl scroll-mt-20 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
        About Me
      </h2>
      <div className="flex flex-col items-center gap-8 md:flex-row">
        <Image
          src="/images/introduce.jpg"
          alt="Tomokichi"
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="text-center md:text-left">
          <p className="leading-relaxed text-muted-foreground">
            Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。この技術への探究心は、自身の「旅」の経験と深く結びついています...
          </p>
          <Link
            href="/about"
            className="mt-4 inline-block font-semibold text-primary transition-colors hover:text-primary/80"
          >
            もっと詳しく →
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
