import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: 'modulmap.ru',
    port: 80, 
    strictPort: true,
    open: false,
  }
})
