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
};

export default nextConfig;
