import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    copy({
      targets: [
        { src: 'src/assets', dest: 'dist/assets' },
        { src: 'src/**/*.jpg', dest: 'dist' }
      ]
    })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true
  },
})
