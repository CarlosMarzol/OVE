import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno basadas en el modo actual (development/production)
  // El tercer argumento '' carga todas las variables, no solo las que empiezan por VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: './', // Rutas relativas para compatibilidad con subdirectorios
    define: {
      // Reemplazo seguro de variables específicas
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // Definición segura de process.env para evitar crashes si alguna librería lo referencia
      'process.env': JSON.stringify({
        NODE_ENV: mode
      })
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