import { test, expect } from '@playwright/test';

const TODO_URL = 'https://demo.playwright.dev/todomvc/';

test.beforeEach(async ({ page }) => {
  await page.goto(TODO_URL);
});

test('can add a new todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Buy groceries');
  await input.press('Enter');

  await expect(page.getByText('Buy groceries')).toBeVisible();
});

test('can complete a todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Finish Playwright tutorial');
  await input.press('Enter');

  const todoItem = page.locator('li', { hasText: 'Finish Playwright tutorial' });
  await expect(todoItem).toBeVisible();

  const checkbox = todoItem.locator('input.toggle');
  await checkbox.check();

  await expect(todoItem).toHaveClass(/completed/);
});

test('can delete a todo', async ({ page }) => {
  const input = page.getByPlaceholder('What needs to be done?');
  await input.fill('Delete me');
  await input.press('Enter');

  const todoItem = page.locator('li', { hasText: 'Delete me' });
  await expect(todoItem).toBeVisible();

  await todoItem.hover();
  await todoItem.locator('button.destroy').click();

  await expect(todoItem).not.toBeVisible();
});