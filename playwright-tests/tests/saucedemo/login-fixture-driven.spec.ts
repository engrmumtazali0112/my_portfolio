import { test, expect } from '../../fixtures/pages';
import users from '../../test-data/users.json';

test.describe('Login with Fixture + Data @fullstack', () => {

  for (const user of users.filter(u => u.shouldPass)) {
    test(`successful login: ${user.username} @smoke`, async ({ page, loginPage }) => {
      await loginPage.goto();
      await loginPage.login(user.username, user.password);
      await expect(page).toHaveURL(/inventory/);
    });
  }
});