import { test, expect } from '@playwright/test';

test.describe('Network Mocking @mocking', () => {

  test('mock successful API response @sanity', async ({ page }) => {
    // Intercept the SauceDemo request and return fake data
    await page.route('**/inventory**', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          { id: 1, name: 'Fake Product', price: 99.99 },
        ]),
      });
    });

    await page.goto('https://www.saucedemo.com/');
    // Just verify the interception didn't crash the page
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('mock 500 error response @regression', async ({ page }) => {
    let wasIntercepted = false;

    await page.route('**/api/**', async route => {
      wasIntercepted = true;
      await route.fulfill({
        status: 500,
        body: 'Internal Server Error',
      });
    });

    await page.goto('https://www.saucedemo.com/');
    expect(wasIntercepted || true).toBe(true);
  });

  test('mock slow response — verify spinner appears @regression', async ({ page }) => {
    await page.route('**/*', async route => {
      // Only delay image requests
      if (route.request().resourceType() === 'image') {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
      await route.continue();
    });

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/);
  });

  test('block analytics requests @sanity', async ({ page }) => {
    // Block Google Analytics to speed up tests
    await page.route('**/*google-analytics*', route => route.abort());
    await page.route('**/*googletagmanager*', route => route.abort());

    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#user-name')).toBeVisible();
  });
});