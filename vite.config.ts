import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    // Aumentamos el límite de advertencia para evitar ruidos en el log
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        // Dejamos que Vite maneje los chunks automáticamente para evitar errores de referencia circular
        manualChunks: undefined
      }
    }
  }
})