import { Metadata } from "next";

export const metadata: Metadata = {
  title: "スキル - Tomokichiのポートフォリオ",
  description:
    "Tomokichiのスキル一覧ページ。Webサイト・アプリケーション開発で使用する技術スタックを紹介します。",
};

// スキルカードの型定義
type Skill = {
  name: string;
  description: string;
};

// スキルデータ
const frontendSkills: Skill[] = [
  {
    name: "Next.js",
    description: "実務レベルでの開発経験あり。App Routerでの開発が得意です。",
  },
  {
    name: "TypeScript",
    description: "型安全な開発のために全てのプロジェクトで採用しています。",
  },
  {
    name: "React",
    description:
      "再利用可能なコンポーネント設計を意識した開発を心がけています。",
  },
  {
    name: "Tailwind CSS",
    description:
      "ユーティリティファーストなCSS設計による迅速なUI構築が可能です。",
  },
];
const backendSkills: Skill[] = [
  {
    name: "Supabase",
    description: "主に個人開発での認証やDBとして利用経験があります。",
  },
];
const otherSkills: Skill[] = [
  {
    name: "Git / GitHub",
    description: "バージョン管理の基本的な操作は問題なく行えます。",
  },
  {
    name: "AI (Gemini APIなど)",
    description:
      "AIを活用した機能開発（AIトラベルプランナー）の経験があります。",
  },
  {
    name: "PWA",
    description: "オフライン対応やパフォーマンス向上のための知識があります。",
  },
];

// スキルカードコンポーネント
const SkillCard = ({ skill }: { skill: Skill }) => (
  <div className="rounded-lg border bg-card p-6 text-card-foreground">
    <h3 className="text-lg font-bold">{skill.name}</h3>
    <p className="mt-2 text-muted-foreground">{skill.description}</p>
  </div>
);

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* ページヘッダー */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          スキルスタック
        </h1>
        <p className="mt-4 text-muted-foreground">
          Webサイト・アプリケーション開発で使用する技術の一覧です。
        </p>
      </section>

      {/* スキルセクション */}
      <div className="space-y-12">
        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Frontend</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {frontendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Backend & Database
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {backendSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold text-foreground">
            Others / Tools
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {otherSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
