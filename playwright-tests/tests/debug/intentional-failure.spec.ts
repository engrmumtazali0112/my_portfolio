import { test, expect } from '@playwright/test';

test.describe('Debugging @debug', () => {

  test('intentional failure for trace demo @debug', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    // This WILL fail — the title is "Swag Labs", not "Wrong Title"
    await expect(page).toHaveTitle('Wrong Title');
  });
});