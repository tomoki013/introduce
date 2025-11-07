import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { NewsItem, NewsTag } from "@/lib/news";

const newsDirectory = path.join(process.cwd(), "posts", "news-posts");

export async function getAllNews(): Promise<NewsItem[]> {
  if (!fs.existsSync(newsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  const allNewsData: NewsItem[] = [];

  for (const fileName of fileNames.filter(
    (name) => name.endsWith(".md") || name.endsWith(".mdx"),
  )) {
    const id = fileName.replace(/\.(md|mdx)$/, "");
    const fullPath = path.join(newsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    allNewsData.push({
      id,
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

export async function getNewsById(id: string): Promise<NewsItem | null> {
  let fullPath: string | null = null;
  const mdPath = path.join(newsDirectory, `${id}.md`);
  const mdxPath = path.join(newsDirectory, `${id}.mdx`);

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
    id,
    content: contentHtml,
    ...(matterResult.data as {
      date: string;
      title: string;
      link?: string;
      tags: NewsTag[];
    }),
  };
}
