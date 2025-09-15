import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import path from 'path';

export default defineConfig({
  server: {
    port: 9000
  },
  plugins: [vue()],
  base: '',
  root: path.join(__dirname, 'src'),
  build: {
    outDir: '../dist'
  }
});