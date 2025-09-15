import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [],
  server: {
    port: 9000
  },
  root: path.join(__dirname, 'src'),
  build: {
    outDir: '../dist'
  }
});