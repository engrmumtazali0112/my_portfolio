import { test, expect } from '@playwright/test';

test.describe('Visual Regression @visual', () => {

  test('SauceDemo login page looks correct @smoke', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.waitForLoadState('networkidle');

    // This creates a baseline screenshot on first run
    await expect(page).toHaveScreenshot('saucedemo-login.png', {
      maxDiffPixels: 100,
    });
  });

  test('TodoMVC homepage looks correct @smoke', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('todomvc-home.png', {
      maxDiffPixels: 100,
    });
  });
});