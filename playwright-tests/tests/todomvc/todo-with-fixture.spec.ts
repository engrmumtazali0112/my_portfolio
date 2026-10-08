import { test, expect } from '../../fixtures/pages';

test.describe('TodoMVC with Fixture @fixture', () => {

  test('can add todo using fixture @smoke', async ({ page, todoPage }) => {
    await todoPage.goto();
    await todoPage.addTodo('Buy milk');
    await expect(page.getByText('Buy milk')).toBeVisible();
  });

  test('can complete todo using fixture @sanity', async ({ page, todoPage }) => {
    await todoPage.goto();
    await todoPage.addTodo('Task 1');
    await todoPage.completeTodo('Task 1');
    await expect(todoPage.getTodoItem('Task 1')).toHaveClass(/completed/);
  });
});