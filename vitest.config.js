import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // Шукаємо тести виключно всередині папки src
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})