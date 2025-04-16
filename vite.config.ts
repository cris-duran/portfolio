import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
   port: 8080,
   strictPort: true,
  },
  server: {
   port: 8080,
   strictPort: true,
   host: true,
   origin: "http://0.0.0.0:8080",
  },
  resolve: {
    alias: {
      '@components': path.resolve(process.cwd(), './src/components'),
      '@assets': path.resolve(process.cwd(), './src/assets'),
      '@constants': path.resolve(process.cwd(), './src/constants')
    }
  }
 });
