import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import yaml from "js-yaml";

const postsDirectory = path.join(process.cwd(), "posts");

export type PostData = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  category?: string;
};

/**
 * introduce.config.jsonファイルを読み取り、スキャン対象のサブディレクトリ名のリストを返す
 */
function getPostSubdirectories(): string[] {
  const allItems = fs.readdirSync(postsDirectory);

  // 🔽 修正点: "introduce.config.json" という名前のファイルのみを対象にする
  const configFiles = allItems.filter(
    (name) => name === "introduce.config.json"
  );

  const directories = new Set<string>();

  for (const configFile of configFiles) {
    const configPath = path.join(postsDirectory, configFile);

    // .config.jsonがファイルであることを確認
    if (fs.statSync(configPath).isDirectory()) continue;

    const fileContents = fs.readFileSync(configPath, "utf8");
    try {
      const config = JSON.parse(fileContents);
      if (Array.isArray(config.directories)) {
        config.directories.forEach((dir: string) => directories.add(dir));
      }
    } catch (e) {
      console.error(`Error parsing ${configFile}:`, e);
    }
  }
  // 例: ["introduce-posts", "common"]
  return Array.from(directories);
}

/**
 * すべての記事のメタデータを取得する
 */
export function getAllPosts(): PostData[] {
  const subDirs = getPostSubdirectories();
  const allPostsData: PostData[] = [];

  for (const dir of subDirs) {
    const dirPath = path.join(postsDirectory, dir);

    // ディレクトリが存在するか確認
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      continue;
    }

    const fileNames = fs.readdirSync(dirPath);

    fileNames
      // .md と .mdx ファイルのみをフィルタリング
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .forEach((fileName) => {
        // slugは拡張子を除いたファイル名
        const slug = fileName.replace(/\.(md|mdx)$/, "");
        const fullPath = path.join(dirPath, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents, {
          engines: { yaml: { parse: yaml.load as any } },
        });

        const excerpt = matterResult.content.slice(0, 120);
        allPostsData.push({
          slug,
          ...(matterResult.data as {
            title: string;
            date: string;
            coverImage?: string;
            category?: string;
          }),
          excerpt,
        });
      });
  }

  // 日付でソート
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

/**
 * すべての記事のスラッグ（ファイル名）をgetStaticPaths用に取得する
 */
export async function getAllPostSlugs() {
  const subDirs = getPostSubdirectories();
  const allSlugs: { params: { slug: string } }[] = [];

  for (const dir of subDirs) {
    const dirPath = path.join(postsDirectory, dir);

    // ディレクトリが存在するか確認
    if (!fs.existsSync(dirPath) || !fs.statSync(dirPath).isDirectory()) {
      continue;
    }

    const fileNames = fs.readdirSync(dirPath);

    fileNames
      // .md と .mdx ファイルのみをフィルタリング
      .filter(
        (fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx")
      )
      .forEach((fileName) => {
        allSlugs.push({
          params: {
            slug: fileName.replace(/\.(md|mdx)$/, ""),
          },
        });
      });
  }

  // 重複するslugがある可能性もありますが、Next.jsは重複を処理します
  return allSlugs;
}

/**
 * 1つの記事データを、スラッグを元に取得する
 * (設定された全サブディレクトリから該当ファイルを探す)
 */
export async function getPostBySlug(slug: string) {
  const subDirs = getPostSubdirectories();
  let fullPath: string | null = null;
  let fileExtension: ".md" | ".mdx" | null = null;

  // すべてのサブディレクトリを検索
  for (const dir of subDirs) {
    const mdPath = path.join(postsDirectory, dir, `${slug}.md`);
    const mdxPath = path.join(postsDirectory, dir, `${slug}.mdx`);

    if (fs.existsSync(mdxPath)) {
      fullPath = mdxPath;
      fileExtension = ".mdx";
      break; // ファイルが見つかったらループ終了
    } else if (fs.existsSync(mdPath)) {
      fullPath = mdPath;
      fileExtension = ".md";
      break; // ファイルが見つかったらループ終了
    }
  }

  // どのディレクトリにもファイルが見つからなかった場合
  if (!fullPath) {
    throw new Error(`Post with slug "${slug}" not found in any directory.`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents, {
    engines: { yaml: { parse: yaml.load as any } },
  });

  // Markdown/MDXをHTMLに変換
  // (もしMDXを正しくパースする必要がある場合、remark-htmlの代わりに
  // next-mdx-remote のようなライブラリが必要になる場合があります)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const excerpt = matterResult.content.slice(0, 120);

  return {
    slug,
    contentHtml,
    excerpt,
    ...(matterResult.data as {
      title: string;
      date: string;
      coverImage?: string;
      category?: string;
    }),
  };
}
