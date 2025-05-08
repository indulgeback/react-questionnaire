/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/client",
  images: {
    domains: ["cdn.discordapp.com", "cdn.pixabay.com", "images.unsplash.com"]
  },
  webpack: (config, { isServer }) => {
    // 处理 MongoDB 相关的 Node.js 模块，这些模块只在服务器端被使用
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        net: false,
        tls: false,
        fs: false,
        dns: false,
        "timers/promises": false
      };
    }
    return config;
  }
};

module.exports = nextConfig;
