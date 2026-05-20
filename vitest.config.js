import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // Наказуємо Vitest шукати тести ВИКЛЮЧНО всередині папки src
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-vue' // або @vitejs/plugin-react залежно від лаби

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Твій поточний робочий порт
    proxy: {
      // Перехоплюємо локальні запити до /ingest
      '/ingest': {
        target: 'https://eu.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ingest/, ''),
      },
    },
  },
})