import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JourneySection from "@/components/features/about/JourneySection";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Traveler Profile | About",
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
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Passport Header */}
        <section className="mb-16 relative bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl overflow-hidden border border-slate-200 dark:border-slate-700">
          <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-primary via-secondary to-accent" />

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-32 h-32 md:w-48 md:h-48 shrink-0">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse" />
              <Image
                src="/images/introduce.jpg"
                alt="Tomokichi"
                fill
                className="rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-lg"
              />
            </div>

            <div className="text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Traveler Profile
              </div>
              <h1 className="text-4xl md:text-5xl font-black font-montserrat mb-4">
                Tomokichi
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                新しい世界への探究心を、技術で形にする。
                <br />
                <span className="text-sm mt-2 block opacity-80">
                  Turning curiosity into code, one journey at a time.
                </span>
              </p>
            </div>
          </div>

          <div className="mt-12 prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed prose-a:text-primary">
            <p>
              Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。汎用的なコンポーネントが様々な場所で機能する瞬間に、開発者として大きな喜びを感じます。
            </p>
            <p>
              この技術への探求心は、自身の「旅」の経験と深く結びついています。世界を旅する中で感じた感動やリアルな体験を共有し、他の人の役に立ちたいという思いからブログ『ともきちの旅行日記』を運営。そして現在は、旅先で感じる「あったらいいな」という不便を、自らの手で解決するツールの開発に力を入れています。
            </p>
            <p>
              将来的には、AI技術を駆使してWebからモバイルまで迅速に開発できるエンジニアを目指しています。旅のコミュニティや、旅行体験そのものをより豊かにするサービスを通じて、技術で新しい世界への扉を開く手助けをしたいと考えています。
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* 経歴セクション */}
          <JourneySection
            journeys={ITJourneys}
            title="IT Journey"
            icon="plane"
          />
          <JourneySection
            journeys={TravelJourneys}
            title="Travel Journey"
            icon="map"
          />
        </div>

        {/* スキルへの導線 */}
        <section className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold font-montserrat mb-2">
              Ready to Pack?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out the tools and technologies I carry on my adventures.
            </p>
            <Link
              href="/skills"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
            >
              View Packing List <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
