const withPWA = require("next-pwa")({
  dest: "public",
  // 必要であれば、他のPWA設定をここに追加
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // PWA以外のNext.js設定はここに書きます
};

module.exports = withPWA(nextConfig);
