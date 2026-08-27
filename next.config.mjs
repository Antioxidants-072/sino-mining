/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启 Next.js 静态网页导出功能
  images: {
    unoptimized: true, // 静态导出需关闭默认图片优化引擎
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ['192.168.0.8'],
};

export default nextConfig;
