import { test, expect } from '@playwright/test'

test('Перевірка повноцінної роботи та інтерактивності панелі сесій', async ({ page }) => {
  // 1. Робот відкриває локальний сервер програми
  await page.goto('http://localhost:5173/')

  // 2. Перевіряє, чи успішно завантажився головний заголовок додатка
  await expect(page.locator('h1')).toBeVisible()

  // 3. Знаходить кнопку London сесії та клікає по ній
  const londonButton = page.locator('button:has-text("London")')
  await expect(londonButton).toBeVisible()
  await londonButton.click()

  // 4. Перевіряє, чи змінився вміст сторінки (шукає згадки сесії)
  const bodyText = page.locator('body')
  await expect(bodyText).toContainText(/London/i)
})