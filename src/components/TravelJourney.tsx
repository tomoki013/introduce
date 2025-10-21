"use client";

const travelJourneys = [
  {
    date: "2015年",
    title: "初めての海外旅行でタイへ",
    description: "バックパッカースタイルで東南アジアを巡る旅の魅力に目覚める。",
  },
  {
    date: "2017年",
    title: "ヨーロッパ周遊",
    description: "フランス、スペイン、ベルギー、ギリシャなどを巡り、歴史的な建造物や多様な文化に触れ、視野を広げる。",
  },
  {
    date: "2018年",
    title: "中東・アフリカ探訪",
    description: "エジプトの古代遺跡やトルコの壮大な景色に感動を覚える。",
  },
  {
    date: "2020年",
    title: "アジア横断の旅",
    description: "インド、ベトナム、韓国を訪れ、多様な文化と人々の生活に触れる。",
  },
  {
    date: "2023年",
    title: "ブログ「ともきちの旅行日記」運営開始",
    description: "自身の体験を基に、これから旅立つ人への情報提供を始める。",
  },
];


export default function TravelJourney() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-foreground">旅の経歴 (Travel Journey)</h2>
      <div className="mt-6 border-l-2 border-accent pl-6">
        {travelJourneys.map((journey, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -left-[calc(1.5rem+2px)] top-1 flex h-full items-start">
              <div className="h-4 w-4 rounded-full border-2 border-accent bg-background" />
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-foreground">{journey.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{journey.description}</p>
              <p className="text-sm text-muted-foreground">{journey.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
