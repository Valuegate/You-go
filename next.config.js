/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      BASE_URL: 'https://web-production-b1c8.up.railway.app/api',
      // BASE_URL: 'https://actor-services.herokuapp.com/api/v1/',
      // NEXTAUTH_URL: 'http://localhost:3000',
      NEXTAUTH_SECRET: 'zTxlgWpmNVnkpkaKFKrpGCdEGAmVof/C/agCX4MTVc4=',
    },
    images: {
      domains: ['yougos3.s3.amazonaws.com'], // Add your S3 bucket domain here
    },
  };
  
  module.exports = nextConfig;