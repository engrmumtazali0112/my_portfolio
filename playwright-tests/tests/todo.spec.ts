import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test.describe('TodoMVC Tests @ui', () => {
  let todoPage: TodoPage;

  test.beforeEach(async ({ page }) => {
    todoPage = new TodoPage(page);
    await todoPage.goto();
  });

  test('can add a new todo @smoke', async ({ page }) => {
    await todoPage.addTodo('Buy groceries');
    await expect(page.getByText('Buy groceries')).toBeVisible();
  });

  test('can complete a todo @sanity', async ({ page }) => {
    const todoText = 'Finish Playwright tutorial';
    await todoPage.addTodo(todoText);
    await todoPage.completeTodo(todoText);
    await expect(todoPage.getTodoItem(todoText)).toHaveClass(/completed/);
  });

  test('can delete a todo @regression', async ({ page }) => {
    const todoText = 'Delete me';
    await todoPage.addTodo(todoText);
    await todoPage.deleteTodo(todoText);
    await expect(todoPage.getTodoItem(todoText)).not.toBeVisible();
  });

  test('can filter completed todos @regression', async ({ page }) => {
    await todoPage.addTodo('Task 1');
    await todoPage.addTodo('Task 2');
    await todoPage.completeTodo('Task 1');
    await todoPage.filterBy('Completed');
    await expect(page.getByText('Task 1')).toBeVisible();
    await expect(page.getByText('Task 2')).not.toBeVisible();
  });
});