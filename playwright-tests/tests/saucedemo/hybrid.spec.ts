import { test, expect } from '@playwright/test';

test.describe('SauceDemo Hybrid Tests @hybrid', () => {

  test('verify inventory count via API and UI @smoke', async ({ page, request }) => {

    // ═══════════════════════════════════════════════
    // STEP 1: API check — is SauceDemo reachable?
    // ═══════════════════════════════════════════════
    const apiResponse = await request.get('https://www.saucedemo.com/');
    expect([200, 403]).toContain(apiResponse.status());

    // ═══════════════════════════════════════════════
    // STEP 2: UI verify — logged in, 6 products shown
    // ═══════════════════════════════════════════════
    await page.goto('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('.inventory_item')).toHaveCount(6);

    // ═══════════════════════════════════════════════
    // STEP 3: UI → Cart → Verify count via UI
    // ═══════════════════════════════════════════════
    await page.locator('.btn_inventory').first().click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('verify product name from UI matches @sanity', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    const firstProductName = await page.locator('.inventory_item_name').first().textContent();

    expect(firstProductName).toBeTruthy();
    expect(firstProductName).toContain('Sauce Labs');
  });
});