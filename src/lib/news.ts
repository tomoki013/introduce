export const newsTags = [
  "プレスリリース",
  "お知らせ",
  "イベント",
  "キャンペーン",
  "メディア掲載",
  "サービス",
  "メンテナンス",
  "重要",
  "その他",
] as const;

export type NewsTag = (typeof newsTags)[number];

export type NewsItem = {
  id: string;
  date: string;
  title: string;
  link?: string;
  tags: NewsTag[];
  content: string;
};
