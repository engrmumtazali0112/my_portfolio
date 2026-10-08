import { test, expect } from '@playwright/test';
import users from '../../test-data/users.json';

test.describe('SauceDemo Data-Driven Login @data-driven', () => {

  for (const user of users) {
    test(`login: ${user.username} → ${user.shouldPass ? 'PASS' : 'FAIL'} @${user.shouldPass ? 'smoke' : 'regression'}`, async ({ page }) => {
      await page.goto('https://www.saucedemo.com/');
      await page.locator('#user-name').fill(user.username);
      await page.locator('#password').fill(user.password);
      await page.locator('#login-button').click();

      if (user.shouldPass) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('[data-test="error"]')).toBeVisible();
      }
    });
  }
});