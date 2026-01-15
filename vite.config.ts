import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // REPARACIÓN CRÍTICA: Usamos rutas relativas './'
  // Esto asegura que la aplicación cargue los estilos y scripts correctamente
  // sin importar si está en la raíz o en una subcarpeta (como suele pasar en GitHub Pages)
  base: './', 
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