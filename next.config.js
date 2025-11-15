const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: false,
  register: true,
  skipWaiting: true,
  fallbacks: {
    document: '/offline.html',
  },
  cacheOnFrontEndNav: false,
  buildExcludes: [
    /\/_next\/static\/.*/i,
    /\/_next\/data\/.*/i,
  ],
  publicExcludes: [
    /\/_next\/static\/.*/i,
    /\/_next\/data\/.*/i,
    /\/_next\/.*\.js$/i,
    /\/_next\/.*\.css$/i,
    /\/_next\/.*\.map$/i,
  ],
  workboxOptions: {
    disableDevLogs: true,
    cleanupOutdatedCaches: true,
    navigateFallback: null,
    navigateFallbackDenylist: [
      /\/_next\/static\/.*/i,
      /\/_next\/data\/.*/i,
      /\/_next\/.*\.js$/i,
      /\/_next\/.*\.css$/i,
    ],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/cdn\.modrinth\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'modrinth-cdn',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 60 * 24 * 7,
          },
        },
      },
    ],
  },
})

const nextConfig = {
  images: {
    domains: ['cdn.modrinth.com'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    staticPageGenerationTimeout: 300,
  },
  staticPageGenerationTimeout: 300,
  trailingSlash: false,
  poweredByHeader: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    return config
  },
}

module.exports = withPWA(nextConfig)
