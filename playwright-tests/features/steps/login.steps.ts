import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

Given('I open the SauceDemo login page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
});

When(
  'I login with username {string} and password {string}',
  async ({ page }, username: string, password: string) => {
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();
  }
);

Then('I should see the inventory page', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});

Then('I should see {int} products', async ({ page }, count: number) => {
  await expect(page.locator('.inventory_item')).toHaveCount(count);
});

Then('I should see an error message', async ({ page }) => {
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});

Then('the error should contain {string}', async ({ page }, text: string) => {
  await expect(page.locator('[data-test="error"]')).toContainText(text);
});

Then('I should see {string}', async ({ page }, expected: string) => {
  if (expected === 'inventory') {
    await expect(page).toHaveURL(/inventory/);
  } else {
    await expect(page.locator(`text=${expected}`)).toBeVisible();
  }
});