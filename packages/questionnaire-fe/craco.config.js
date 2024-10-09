const path = require('path')

module.exports = {
  // 开发服务器配置
  devServer: {
    proxy: {
      '/api': 'http://localhost:8878'
    },
    port: 8877
  },
  webpack: {
    // webpack配置
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}
