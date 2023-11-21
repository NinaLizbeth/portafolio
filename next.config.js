/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/*/**',
          },
        ],
      },

      // Desactivar la optimización y minificación
  optimization: {
    minimize: false,
  },
}

module.exports = nextConfig
