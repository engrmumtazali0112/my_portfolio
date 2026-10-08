import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

const authFile = 'auth.json';

setup('authenticate @setup', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await page.context().storageState({ path: authFile });
});