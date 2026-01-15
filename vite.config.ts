import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: './', 
    define: {
      // SOLO definimos la variable específica que necesitamos.
      // Eliminar la redefinición de 'process.env' completo soluciona el error "Transform failed".
      'process.env.API_KEY': JSON.stringify(env.API_KEY || "")
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
  }
})