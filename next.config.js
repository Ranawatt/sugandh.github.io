const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'media.dev.to',
          port: '',
          pathname: '/user_uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'github-readme-stats.vercel.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'github-readme-streak-stats.herokuapp.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'stardev.io',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'http',
          hostname: 'github-profile-summary-cards.vercel.app',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'github-profile-trophy.vercel.app',
          port: '',
          pathname: '/**',
        }
    ],
    dangerouslyAllowSVG: true,
  }
}