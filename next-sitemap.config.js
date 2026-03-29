const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');
const postsDirectory = path.join(process.cwd(), 'posts');
const rootDirectoryMarker = '.';

/**
 * 指定されたディレクトリから再帰的にすべてのMarkdownファイルのパスを取得します。
 * @param {string} dir - 検索を開始するディレクトリ。
 * @returns {string[]} Markdownファイルのパスの配列。
 */
const getMarkdownFiles = (dir) => {
  let files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(getMarkdownFiles(fullPath));
    } else if (item.isFile() && (path.extname(item.name) === '.md' || path.extname(item.name) === '.mdx')) {
      files.push(fullPath);
    }
  }
  return files;
};

const resolveContentDirectory = (dir) =>
  dir === rootDirectoryMarker ? postsDirectory : path.join(postsDirectory, dir);

const getConfiguredDirectories = (configPath) => {
  if (!fs.existsSync(configPath)) {
    return [];
  }

  const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!Array.isArray(configData.directories)) {
    return [];
  }

  return [...new Set(configData.directories.filter((dir) => typeof dir === 'string' && dir.trim().length > 0))];
};

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.tomokichidiary.com/',
  generateRobotsTxt: true,
  outDir: './public',
  // 動的ルートを追加
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    // ニュース記事のパス
    const newsConfigPath = 'posts/news.config.json';
    let newsPaths = [];
    if (fs.existsSync(newsConfigPath)) {
      for (const dir of getConfiguredDirectories(newsConfigPath)) {
        const fullDir = resolveContentDirectory(dir);
        if (fs.existsSync(fullDir)) {
          const newsFiles = fs.readdirSync(fullDir);
          const paths = newsFiles
            .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
            .map(file => ({ loc: `/news/${file.replace(/\.(md|mdx)$/, '')}` }));
          newsPaths = newsPaths.concat(paths);
        }
      }
    }

    // プロジェクトページのパス
    const projectsData = JSON.parse(fs.readFileSync('src/data/projects.json', 'utf8'));
    const projectPaths = projectsData.map(project => ({ loc: `/projects/${project.slug}` }));

    // ブログ記事のパス
    const blogConfigs = ['posts/introduce.config.json', 'posts/it-blog.config.json'];
    let blogPaths = [];

    for (const configPath of blogConfigs) {
      for (const dir of getConfiguredDirectories(configPath)) {
        const fullDir = resolveContentDirectory(dir);
        if (fs.existsSync(fullDir)) {
          const files = getMarkdownFiles(fullDir);
          for (const file of files) {
            const content = fs.readFileSync(file, 'utf8');
            const { data } = matter(content, {
              engines: { yaml: { parse: yaml.load } },
            });
            const slug = data.slug || path.basename(file, path.extname(file));
            blogPaths.push({ loc: `/blog/${slug}` });
          }
        }
      }
    }

    // 全ての動的パスを結合
    return [...newsPaths, ...projectPaths, ...blogPaths];
  },
};
