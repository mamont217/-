import { test, expect } from '@playwright/test';

test('Проверка видимости кнопок', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Docs' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'API' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Community' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Discord server' })).toBeVisible(); 
});

  test('Проверка содержимого кнопок', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  await expect(page.getByLabel('Main', { exact: true }).locator('b')).toContainText('Playwright');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Docs');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('API');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Node.js');
  await expect(page.getByLabel('Main', { exact: true })).toContainText('Community');
  await expect(page.locator('h1')).toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
});

test('Проверка фона гл страницы', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.locator('.toggleButton_gllP').click()
  await expect(page.locator('HTML')).toHaveAttribute('data-theme','dark')

});