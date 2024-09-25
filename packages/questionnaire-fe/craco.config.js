const path = require('path')

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:8897'
    },
    port: 8899
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
