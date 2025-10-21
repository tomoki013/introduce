import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TravelJourney from "@/components/TravelJourney";

export const metadata: Metadata = {
  title: "自己紹介 - Tomokichiのポートフォリオ",
  description:
    "Tomokichiの自己紹介ページ。技術への探求心と旅の経験を活かしたエンジニアとしてのビジョンを紹介します。",
};

const journeys = [
  {
    date: "2024年5月",
    title: "プログラミング学習を開始（HTML,CSS,JavaScript,Python）",
    category: "学習",
  },
  {
    date: "2024年7月",
    title: "HTML,CSS,JavaScriptを使った簡単な自己紹介サイトを作成",
    category: "開発",
  },
  {
    date: "2024年8月",
    title: "HTML,CSS,JavaScriptを使ったブログサイトの開発開始",
    category: "開発",
  },
  {
    date: "2024年11月",
    title: "Next.jsとTypeScriptを学習開始",
    category: "学習",
  },
  {
    date: "2024年11月",
    title: "ブログサイトの開発をNext.jsに移行",
    category: "開発",
  },
  {
    date: "2025年1月",
    title: "ブログ「ともきちの旅行日記」開設",
    category: "リリース",
  },
  {
    date: "2025年5月",
    title: "金融学習サイト「マネーマスター」開設",
    category: "リリース",
  },
  {
    date: "2025年7月",
    title: "ルーレットサイト「Webでルーレット」開設",
    category: "リリース",
  },
  {
    date: "2025年9月",
    title: "自己紹介サイトを開設",
    category: "リリース",
  },
  {
    date: "2025年10月",
    title: "AIトラベルプランナー開発開始",
    category: "開発",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* ページヘッダー */}
      <section className="mb-12 flex flex-col items-center text-center">
        <Image
          src="/images/introduce.jpg"
          alt="Tomokichi"
          width={120}
          height={120}
          className="rounded-full"
        />
        <h1 className="mt-6 text-4xl font-bold text-foreground">Tomokichi</h1>
        <p className="mt-2 text-lg text-primary">
          新しい世界への探究心を、技術で形にする。
        </p>
      </section>

      {/* 自己紹介文 */}
      <section className="prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed prose-a:text-primary">
        <p className="text-lg">
          Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。汎用的なコンポーネントが様々な場所で機能する瞬間に、開発者として大きな喜びを感じます。
        </p>
        <p className="text-lg">
          この技術への探求心は、自身の「旅」の経験と深く結びついています。世界を旅する中で感じた感動やリアルな体験を共有し、他の人の役に立ちたいという思いからブログ『ともきちの旅行日記』を運営。そして現在は、旅先で感じる「あったらいいな」という不便を、自らの手で解決するツールの開発に力を入れています。
        </p>
        <p className="text-lg">
          将来的には、AI技術を駆使してWebからモバイルまで迅速に開発できるエンジニアを目指しています。旅のコミュニティや、旅行体験そのものをより豊かにするサービスを通じて、技術で新しい世界への扉を開く手助けをしたいと考えています。
        </p>
      </section>

      <TravelJourney />

      {/* 経歴セクション */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-foreground">ITの経歴 (IT Journey)</h2>
        <div className="mt-6 border-l-2 border-primary pl-6">
          {journeys.map((journey, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute -left-[calc(1.5rem+2px)] top-1 flex h-full items-start">
                <div className="h-4 w-4 rounded-full border-2 border-primary bg-background" />
              </div>
              <div className="ml-4">
                <span className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
                  {journey.category}
                </span>
                <h3 className="mt-2 font-bold text-foreground">
                  {journey.title}
                </h3>
                <p className="text-sm text-muted-foreground">{journey.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* スキルへの導線 */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-foreground">スキル</h2>
        <p className="mt-4 text-muted-foreground">
          使用する技術スタックの詳細はこちらをご覧ください。
        </p>
        <Link
          href="/skills"
          className="mt-6 inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          スキル一覧へ
        </Link>
      </section>
    </div>
  );
}
