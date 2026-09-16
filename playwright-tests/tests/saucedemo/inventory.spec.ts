import { test, expect } from '@playwright/test';

test.describe('SauceDemo Inventory @saucedemo', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');
  });

  test('shows inventory page after login @smoke', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('shows 6 products @sanity', async ({ page }) => {
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });

  test('can add product to cart @regression', async ({ page }) => {
    await page.locator('.btn_inventory').first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});