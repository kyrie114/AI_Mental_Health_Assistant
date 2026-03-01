import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from 'path'//用于处理路径
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),//别名配置定义了@别名指向src目录，方便在代码中引用src目录下的文件
    },
  },
})
