/** @type {import('next').NextConfig} */
const nextConfig = {
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'fieldflow.lu',
          },
        ],
        destination: 'https://esg.fieldflow.lu/:path*',
        permanent: true,
      },
      {
        source: '/(.*)',
        has: [
          {
            type: 'host',
            value: 'esg.fieldflow.lu',
          },
        ],
        destination: 'https://esg.fieldflow.lu/:path*',
        permanent: true,
      },
    ];
  },};

export default nextConfig;
