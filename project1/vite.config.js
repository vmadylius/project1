import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Налаштування продуктової збірки для нашого Trading Dashboard
export default defineConfig({
  plugins: [react()],
})