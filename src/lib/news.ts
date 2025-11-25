import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
  slug: string;
  date: string;
  title: string;
  link?: string;
  tags: NewsTag[];
  content: string;
};

const newsDirectory = path.join(process.cwd(), "posts", "news-posts");

export async function getAllNews(): Promise<NewsItem[]> {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData: NewsItem[] = [];

  for (const fileName of fileNames.filter(
    (name) => name.endsWith(".md") || name.endsWith(".mdx")
  )) {
    const slug = fileName.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    allNewsData.push({
      slug,
      ...(matterResult.data as {
        date: string;
        title: string;
        link?: string;
        tags: NewsTag[];
      }),
      content: contentHtml,
    });
  }

  return allNewsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getNewsById(slug: string): Promise<NewsItem | null> {
  let fullPath: string | null = null;
  const mdPath = path.join(newsDirectory, `${slug}.md`);
  const mdxPath = path.join(newsDirectory, `${slug}.mdx`);

  if (fs.existsSync(mdxPath)) {
    fullPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    fullPath = mdPath;
  }

  if (!fullPath) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    content: contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      link?: string;
      tags: NewsTag[];
    }),
  };
}
