/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启 Next.js 静态网页导出功能
  images: {
    unoptimized: true, // 静态导出需关闭默认图片优化引擎
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['192.168.0.13'],
  experimental: {
    // 允许来自其他来源的 WebSocket 连接
    allowedCrossOriginOrigins: ['192.168.0.13'],
  },
};

export default nextConfig;
