/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        protocol: "https",
      },
      {
        hostname: "cdn.myanimelist.net",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
