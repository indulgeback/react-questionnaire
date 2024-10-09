const path = require('path')

module.exports = {
  // 开发服务器配置
  devServer: {
    proxy: {
      '/api': 'http://localhost:8878' // mock服务
      // '/api': 'http://localhost:8879' // 后端服务
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
