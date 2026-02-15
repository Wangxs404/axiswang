/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // 使用pnpm作为缓存管理器而不是默认的npm
  experimental: {
    // cache: 'npm',
    // ppr: true,
  },
};

const withMDX = createMDX({
  // You can add remark/rehype plugins here if needed.
});

export default withMDX(nextConfig);
