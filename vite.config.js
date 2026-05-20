import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Виправили суто під твій React-проєкт

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5175, // Твій робочий порт Mac
    proxy: {
      // Перехоплюємо локальні запити до /ingest
      '/pb-analytics': {
        target: 'https://eu.i.posthog.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/ingest/, ''),
      },
    },
  },
})

