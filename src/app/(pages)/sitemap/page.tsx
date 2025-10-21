import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サイトマップ - Tomokichiのポートフォリオ",
  description: "Tomokichiのポートフォリオサイトのサイトマップページです。",
};

const pages = [
  { href: "/", title: "トップ" },
  { href: "/about", title: "自己紹介" },
  { href: "/projects", title: "制作実績" },
  { href: "/blog", title: "ブログ" },
  { href: "/news", title: "ニュース" },
  { href: "/skills", title: "スキル" },
  { href: "/contact", title: "お問い合わせ" },
  { href: "/social", title: "ソーシャル" },
  { href: "/terms", title: "利用規約" },
  { href: "/privacy", title: "プライバシーポリシー" },
  { href: "/sitemap", title: "サイトマップ" },
];

export default function SitemapPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <section className="mb-12 text-center">
        <h1 className="mt-6 text-4xl font-bold text-foreground">
          サイトマップ
        </h1>
      </section>

      <section className="prose prose-lg max-w-none dark:prose-invert">
        <ul>
          {pages.map((page) => (
            <li key={page.href} className="mb-4">
              <Link
                href={page.href}
                className="text-primary transition-colors hover:underline"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
