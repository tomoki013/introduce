import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Journey from "@/components/features/journey/Journey";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tomokichiの自己紹介ページ。技術への探求心と旅の経験を活かしたエンジニアとしてのビジョンを紹介します。",
};

const ITJourneys = [
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
    date: "2025年10月",
    title: "AIトラベルプランナー開発開始",
    category: "開発",
  },
  {
    date: "2025年10月",
    title: "Tomokichi Official Websiteを開設",
    category: "リリース",
  },
];

const TravelJourneys = [
  {
    date: "2024年3月",
    title: "初めての海外旅行でタイへ",
    description: "バックパッカースタイルで東南アジアを巡る旅の魅力に目覚める。",
    category: "海外旅行",
  },
  {
    date: "2024年9月",
    title: "インドの旅",
    description: "インド訪れ、多様な文化と人々の生活に触れる。",
    category: "海外旅行",
  },
  {
    date: "2025年1月",
    title: "ブログ「ともきちの旅行日記」運営開始",
    description: "自身の体験を基に、これから旅立つ人への情報提供を始める。",
    category: "ブログ",
  },
  {
    date: "2025年2月",
    title: "ヨーロッパ周遊",
    description:
      "フランス、スペイン、ベルギー、ギリシャなどを巡り、歴史的な建造物や多様な文化に触れ、視野を広げる。",
    category: "海外旅行",
  },
  {
    date: "2025年6月",
    title: "中東・アフリカ探訪",
    description: "エジプトの古代遺跡やトルコの壮大な景色に感動を覚える。",
    category: "海外旅行",
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

      <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* 経歴セクション */}
        <Journey
          journeys={ITJourneys}
          title="IT経歴 (IT Journey)"
          borderClassName="border-primary"
          categoryClassName="text-primary-foreground bg-primary"
        />
        <Journey
          journeys={TravelJourneys}
          title="旅の経歴 (Travel Journey)"
          borderClassName="border-accent"
          categoryClassName="text-accent-foreground bg-accent"
        />
      </div>

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
