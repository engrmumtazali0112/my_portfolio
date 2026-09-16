import { test as base } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { LoginPage } from '../pages/LoginPage';

// Define fixture types
type MyFixtures = {
  todoPage: TodoPage;
  loginPage: LoginPage;
};

// Extend Playwright's test with our fixtures
export const test = base.extend<MyFixtures>({
  todoPage: async ({ page }, use) => {
    const todoPage = new TodoPage(page);
    await use(todoPage);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
});

export { expect } from '@playwright/test';