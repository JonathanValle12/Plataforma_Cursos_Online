import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build' // La carpeta donde quieres que se generen los archivos de salida
  }
})
