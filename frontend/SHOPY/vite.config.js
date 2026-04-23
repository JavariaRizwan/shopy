
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `${import.meta.env.VITE_API_URL}/api/products`,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
