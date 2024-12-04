import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@questionnaire/shared': path.resolve(__dirname, '../shared/src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8879',
        changeOrigin: true
      }
    },
    port: 8877,
    open: true
  },
  plugins: [
    react(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    }),
    ViteImageOptimizer()
  ],
  css: {
    preprocessorOptions: {
      scss: {
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
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
})
