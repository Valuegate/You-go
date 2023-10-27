/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // BASE_URL: 'https://web-production-b1c8.up.railway.app/api',
        BASE_URL: 'https://actor-services.herokuapp.com/api/v1/',
        NEXTAUTH_URL: 'http://localhost:3000',
        NEXTAUTH_SECRET: 'zTxlgWpmNVnkpkaKFKrpGCdEGAmVof/C/agCX4MTVc4='
    }
}

module.exports = nextConfig
