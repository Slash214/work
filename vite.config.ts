import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

const pathResolve = (dir: string) => resolve(__dirname, dir)

export default defineConfig({
  plugins: [
    vue(),
    AutoImport(),
    Components(),
    createSvgIconsPlugin({
      iconDirs: [pathResolve('./src/icons/svg')],
      symbolId: '[name]'
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      views: pathResolve('./src/views'),
      componetns: pathResolve('./src/components'),
      assets: pathResolve('./src/assets')
    }
  },
  build: {
    outDir: 'dist', // 打包路径 默认为项目下的dist目录
    terserOptions: {
      compress: {
        keep_infinity: true, // 防止 Infinity 被压缩成 1/0，这可能会导致 Chrome 上的性能问题
        drop_console: true, // 生产环境去除 console
        drop_debugger: true // 生产环境去除 debugger
      }
    },
    chunkSizeWarningLimit: 1500 // chunk大小警告 kbs
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/common.scss";`,
        javascriptEnbled: true
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 4100,
    open: true,
    cors: true
  }
})
