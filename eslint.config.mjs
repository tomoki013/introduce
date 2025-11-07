import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";
import js from "@eslint/js";
import tsEslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "src/lib/news.js",
    ],
  },
  {
    ...js.configs.recommended,
    ...reactRecommended,
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ...reactRecommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  ...tsEslint.configs.recommended,
  ...compat.extends("plugin:@next/next/recommended"),
  {
    files: ["next-sitemap.config.js"],
    rules: {
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
  },
];

export default eslintConfig;
