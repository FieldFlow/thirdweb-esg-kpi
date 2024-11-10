/** @type {import('next').NextConfig} */
const nextConfig = {
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'https://thirdweb-esg-kpi.vercel.app/:path*',
      },
      {
        source: '/:path*',
        destination: 'https://esg.fieldflow.lu/:path*',
      },
    ];
  },
};

export default nextConfig;
