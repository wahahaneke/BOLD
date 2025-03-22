/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态HTML导出
  basePath: '/BOLD', // 设置基本路径为仓库名
  images: {
    domains: ['ipfs.io', 'arweave.net'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    unoptimized: false, // 启用图片优化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.io',
      },
      {
        protocol: 'https',
        hostname: 'arweave.net',
      },
    ],
  },
  // 添加以下配置，避免在静态导出时出现问题
  trailingSlash: true,
  // 增加网站性能
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
