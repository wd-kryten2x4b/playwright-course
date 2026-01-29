import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://invision.sbx1.ascendon.tv/customercare/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('william.devitt@lyse.no');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
});