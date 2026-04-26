/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: "loose"
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      bson: new URL('./node_modules/bson/lib/bson.js', import.meta.url).pathname
    };
    return config;
  }
};

export default nextConfig;