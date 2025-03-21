/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态HTML导出
  basePath: '/BOLD', // 设置基本路径为仓库名
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
      },
    ],
  },
  // 添加以下配置，避免在静态导出时出现问题
  trailingSlash: true,
};

export default nextConfig;
