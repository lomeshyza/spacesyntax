import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/spacesyntax/',
  server: {
    host: '90.156.134.97',
    port: 8077
  }

})
