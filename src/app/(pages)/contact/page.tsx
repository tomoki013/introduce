import { Metadata } from "next";
import { FiGithub } from "react-icons/fi";
import { SiQiita, SiZenn } from "react-icons/si";

import { MotionDiv } from "@/components/common/Motion";
import ContactForm from "@/components/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tomokichiへのお問い合わせページ。お仕事のご依頼、技術的なご相談などはこちらからご連絡ください。",
};

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MotionDiv
      className="mx-auto max-w-2xl p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* ページヘッダー */}
      <MotionDiv variants={itemVariants}>
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            お問い合わせ
          </h1>
          <p className="mt-4 text-muted-foreground">
            お仕事のご依頼、技術的なご相談など、お気軽にご連絡ください。
          </p>
        </section>
      </MotionDiv>

      {/* お問い合わせフォーム */}
      <MotionDiv variants={itemVariants}>
        <ContactForm />
      </MotionDiv>

      {/* SNS */}
      <MotionDiv variants={itemVariants}>
        <section className="mt-12 text-center">
          <h2 className="mb-4 text-xl font-bold text-foreground">SNS</h2>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/tomoki013"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-3xl text-muted-foreground transition-colors hover:text-primary"
            >
              <FiGithub />
            </a>
            <a
              href="https://qiita.com/Tomokichi_M"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Qiita"
              className="text-3xl text-muted-foreground transition-colors hover:text-primary"
            >
              <SiQiita />
            </a>
            <a
              href="https://zenn.dev/tomokichi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Zenn"
              className="text-3xl text-muted-foreground transition-colors hover:text-primary"
            >
              <SiZenn />
            </a>
          </div>
        </section>
      </MotionDiv>
    </MotionDiv>
  );
}
