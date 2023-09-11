import { defineConfig } from 'vite'

const path = require('path')

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: './',
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  build: {
    outDir: '../docs',
  },
  server: {
    port: 8080,
    hot: true
  }
})
