import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// 設定ファイルのパス (サブモジュール内を指す)
const configPath = path.join(process.cwd(), "posts", "introduce.config.json");
// サブモジュールのルートパス
const postsBaseDir = path.join(process.cwd(), "posts");

interface IntroduceConfig {
  directories: string[];
}

// --- ヘルパー関数 ---
function getConfig(): IntroduceConfig {
  if (!fs.existsSync(configPath)) {
    throw new Error(`Configuration file not found at ${configPath}`);
  }
  const configFile = fs.readFileSync(configPath, "utf8");
  // JSON.parseにtry-catchを追加してエラーハンドリングを強化
  try {
    return JSON.parse(configFile);
  } catch (error) {
    throw new Error(
      `Failed to parse config file at ${configPath}: ${
        error instanceof Error ? error.message : String(error)
      }`
    );
  }
}

function getPostDirectories(): string[] {
  const config = getConfig();
  // postsサブモジュール内の絶対パスに変換
  return config.directories.map((dir) => path.join(postsBaseDir, dir));
}

// --- 主要な関数 ---
export type PostData = {
  slug: string;
  title: string;
  date: string;
  [key: string]: unknown; // Frontmatterの他のフィールドも許容
};

export function getAllPosts(): PostData[] {
  const postDirectories = getPostDirectories();
  const allPostsData = postDirectories.flatMap((dir) => {
    if (!fs.existsSync(dir)) {
      console.warn(`Directory not found, skipping: ${dir}`);
      return [];
    }
    try {
      const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith(".md")); // .mdのみ対象
      return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(dir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents); // matterResult を分割代入に変更

        return {
          ...(data as { title: string; date: string }), // スプレッドを先に
          slug, // スラッグで上書き
        };
      });
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error);
      return []; // エラーが発生したディレクトリはスキップ
    }
  });

  // 日付でソート
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllPostSlugs() {
  const postDirectories = getPostDirectories();
  const paths = postDirectories.flatMap((dir) => {
    if (!fs.existsSync(dir)) {
      return [];
    }
    try {
      const fileNames = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
      return fileNames.map((fileName) => ({
        params: {
          slug: fileName.replace(/\.md$/, ""),
        },
      }));
    } catch (error) {
      console.error(`Error reading directory ${dir} for slugs:`, error);
      return [];
    }
  });
  return paths;
}

export async function getPostBySlug(slug: string): Promise<
  PostData & {
    contentHtml: string;
  }
> {
  const postDirectories = getPostDirectories();
  let fullPath: string | undefined;

  for (const dir of postDirectories) {
    const potentialPath = path.join(dir, `${slug}.md`); // .mdを探す
    if (fs.existsSync(potentialPath)) {
      fullPath = potentialPath;
      break;
    }
  }

  if (!fullPath) {
    // 見つからなかった場合のエラーをより具体的に
    throw new Error(
      `Post not found for slug: ${slug} in directories: ${postDirectories.join(
        ", "
      )}`
    );
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents); // matterResult を分割代入

  // MarkdownをHTMLに変換
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    ...(data as PostData), // スプレッドを先に
    slug, // スラッグで上書き
    contentHtml,
  };
}
