import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esto le dice a la web que está alojada en la carpeta /OVE/
  // Si cambias el nombre del repositorio, debes cambiar esto también.
  base: '/OVE/', 
})