import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Para Vercel o raíz, base debe ser '/'. Si es GitHub Pages en subcarpeta, cambiar a './'
  base: '/', 
  define: {
    'process.env': process.env
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          utils: ['lucide-react', 'react-markdown', '@google/genai']
        }
      }
    }
  }
})