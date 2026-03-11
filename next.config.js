/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
  },
  webpack: (config, { dev }) => {
    // Work around intermittent Windows/webpack filesystem cache OOM errors
    // ("RangeError: Array buffer allocation failed") during `next dev --webpack`.
    if (dev) config.cache = false;
    return config;
  },
};
module.exports = nextConfig;
