"use client";

import Link from "next/link";
import { FaGithub, FaPenSquare } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import { MotionDiv } from "@/components/common/Motion";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/tomoki013",
    description: "開発プロジェクトや学習の記録を公開しています。",
    icon: <FaGithub className="h-12 w-12" />,
  },
  {
    name: "note",
    url: "https://note.com/tomokichidiary",
    description: "日々の考えや学びを記録しています。",
    icon: <FaPenSquare className="h-12 w-12" />,
  },
  {
    name: "Qiita",
    url: "https://qiita.com/tomoki013",
    description: "",
    icon: <SiQiita className="h-12 w-12" />,
  },
  {
    name: "Zenn",
    url: "https://zenn.dev/tomoki013",
    description: "",
    icon: <SiZenn className="h-12 w-12" />,
  },
];

export default function SocialLinksClient() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {socialLinks.map((social, index) => (
        <MotionDiv
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
          whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)" }}
          className="flex flex-col items-center rounded-lg border bg-card p-6 text-center text-card-foreground shadow-lg"
        >
          <div className="mb-4 text-primary">{social.icon}</div>
          <h2 className="mb-2 text-2xl font-bold">{social.name}</h2>
          <p className="mb-4 text-muted-foreground">{social.description}</p>
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glitch mt-auto inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
            data-text="フォローする"
          >
            フォローする
          </Link>
        </MotionDiv>
      ))}
    </div>
  );
}
