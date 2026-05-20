import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175,
    proxy: {
      // Статичні ресурси PostHog (surveys.js, recorder.js тощо)
      '/pb-analytics/static': {
        target: 'https://eu.i.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pb-analytics/, ''),
      },
      // Всі інші запити PostHog (e/, s/, flags/, decide/)
      '/pb-analytics': {
        target: 'https://eu.i.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pb-analytics/, ''),
      },
    },
  },
})