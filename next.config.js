/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org"],
  },
  experimental: {
    appDir: true,
  },
};
