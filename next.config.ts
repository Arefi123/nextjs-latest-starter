import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    typedRoutes: true,
    images: {
        qualities: [75, 100],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            }
        ],
        localPatterns: [
            {
                pathname: '/assets/**',
            }
        ]
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);