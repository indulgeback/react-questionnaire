import path from 'path'
module.exports = {
  // 开发服务器配置
  devServer: {
    proxy: {
      // '/api': 'http://localhost:8878' // mock服务
      '/api': 'http://localhost:8879' // 后端服务
    },
    port: 8877
  },
  webpack: {
    // webpack配置
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig, { env, paths }) => {
      // 添加 file-loader 和 url-loader 的配置
      webpackConfig.module.rules.push({
        test: /\.svg$/,
        use: [
          { loader: 'svg-sprite-loader', options: {} }
          // { loader: 'svgo-loader', options: { plugins: [{ removeAttrs: { attrs: 'fill' } }] } }
        ]
      })
      return webpackConfig
    }
  }
}
