/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/AshutoshDM1/Web3Wallet/raw/main/public/**",
      },
    ],
  },
};

export default nextConfig;
