import { test, expect } from '@playwright/test';

test.describe('SauceDemo Visual @visual @regression', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
    await page.waitForLoadState('networkidle');
  });

  test('inventory page looks correct', async ({ page }) => {
    await expect(page).toHaveScreenshot('inventory-page.png', {
      maxDiffPixels: 100,
      mask: [page.locator('.shopping_cart_badge')],
    });
  });

  test('product detail page looks correct', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory-item.html?id=4');
    await page.waitForLoadState('networkidle');

    await expect(page).toHaveScreenshot('product-detail.png', {
      maxDiffPixels: 100,
    });
  });
});