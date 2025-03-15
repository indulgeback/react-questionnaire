import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import pkg from './package.json'

// 提取package.json中的版本号
const { version } = pkg

// 导出一个定义Vite配置的函数
export default defineConfig({
  // 设置项目的基路径
  base: '/',
  // 配置模块解析选项
  resolve: {
    alias: {
      // 配置 '@' 别名指向 src 目录
      '@': path.resolve(__dirname, 'src')
    }
  },
  // 配置开发服务器
  server: {
    proxy: {
      // 代理 /api 请求到本地 mock 服务器
      '/api': {
        target: 'https://xmquestionnaire.cn',
        // target: 'http://localhost:8879',
        changeOrigin: true
      }
    },
    // 设置服务器端口
    port: 8877,
    // 启动时自动打开浏览器
    open: true
  },
  // 配置插件列表
  plugins: [
    // 使用 React 插件
    react(),
    // 创建 SVG 图标插件
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    // 使用图片优化插件
    ViteImageOptimizer()
  ],
  // 配置 CSS 相关选项
  css: {
    preprocessorOptions: {
      scss: {
        // 在 SCSS 中添加额外的数据
        additionalData: `@use "sass:math" as *;`,
        includePaths: ['node_modules'],
        // 添加 --math-style 参数
        implementation: require('sass'),
        sassOptions: {
          outputStyle: 'compressed',
          // 设置数学风格
          mathStyle: 'always'
        }
      },
      postcss: {
        // 使用 PostCSS 插件
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  },
  // 定义全局常量
  define: {
    __APP_VERSION__: JSON.stringify(version)
  },
  // 配置构建选项
  build: {
    rollupOptions: {
      output: {
        // 手动分割代码块
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        }
      }
    }
  }
})
