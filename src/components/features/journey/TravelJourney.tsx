"use client";

const travelJourneys = [
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

export default function TravelJourney() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground">
        旅の経歴 (Travel Journey)
      </h2>
      <div className="mt-6 border-l-2 border-accent pl-6">
        {travelJourneys.map((journey, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -left-[calc(1.5rem+2px)] top-1 flex h-full items-start">
              <div className="h-4 w-4 rounded-full border-2 border-accent bg-background" />
            </div>
            <div className="ml-4">
              <span className="rounded-full bg-accent px-2 py-1 text-xs text-accent-foreground">
                {journey.category}
              </span>
              <h3 className="mt-2 font-bold text-foreground">
                {journey.title}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {journey.description}
              </p>
              <p className="text-sm text-muted-foreground">{journey.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
