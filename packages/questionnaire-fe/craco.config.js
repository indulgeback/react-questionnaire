const path = require('path')

module.exports = {
  // 开发服务器配置
  devServer: {
    proxy: {
      '/api': 'http://localhost:8897'
    },
    port: 8899
  },
  webpack: {
    // webpack配置
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
