/** @type {import('next').NextConfig} */
const nextConfig = {
  // 使用pnpm作为缓存管理器而不是默认的npm
  experimental: {
    // 移除npm缓存设置
    // cache: 'npm',
    // 移除ppr设置，因为它需要canary版本的Next.js
    // ppr: true,
  },
};

export default nextConfig;
