import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { NewsItem, NewsTag } from "@/lib/news";

const postsDirectory = path.join(process.cwd(), "posts");

function getNewsSubdirectories(): string[] {
  const configPath = path.join(postsDirectory, "news.config.json");
  if (!fs.existsSync(configPath)) {
    return [];
  }

  const fileContents = fs.readFileSync(configPath, "utf8");
  try {
    const config = JSON.parse(fileContents);
    if (Array.isArray(config.directories)) {
      return config.directories;
    }
  } catch (e) {
    console.error(`Error parsing news.config.json:`, e);
  }
  return [];
}

export async function getAllNews(): Promise<NewsItem[]> {
  const subDirs = getNewsSubdirectories();
  const allNewsData: NewsItem[] = [];

  for (const dir of subDirs) {
    const dirPath = path.join(postsDirectory, dir);

    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      continue;
    }

    const fileNames = fs.readdirSync(dirPath);

    for (const fileName of fileNames.filter(
      (name) => name.endsWith(".md") || name.endsWith(".mdx"),
    )) {
      const id = fileName.replace(/\.(md|mdx)$/, "");
      const fullPath = path.join(dirPath, fileName);
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
  const subDirs = getNewsSubdirectories();
  let fullPath: string | null = null;

  for (const dir of subDirs) {
    const mdPath = path.join(postsDirectory, dir, `${id}.md`);
    const mdxPath = path.join(postsDirectory, dir, `${id}.mdx`);

    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath;
      break;
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
      break;
    }
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
