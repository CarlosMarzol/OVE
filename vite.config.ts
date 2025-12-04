import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Para Vercel, la base debe ser '/' (la raíz).
  base: '/', 
  build: {
    // Aumentamos el límite de advertencia para chunks grandes (1000kb)
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Dividimos las librerías grandes en archivos separados para optimizar la carga
        // y solucionar la advertencia de 'chunk size limit'
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          charts: ['recharts'],
          utils: ['lucide-react', 'react-markdown', '@google/genai']
        }
      }
    }
  }
})