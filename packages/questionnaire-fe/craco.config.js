const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
