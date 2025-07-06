import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/submit-to-mongodb': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      },
      '/submit-to-google-sheets': {
        target: 'http://localhost:3003',
        changeOrigin: true,
      }
    }
  },
})
