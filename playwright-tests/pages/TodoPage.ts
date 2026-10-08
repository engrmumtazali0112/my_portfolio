import { Page, Locator } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly input: Locator;
  readonly todoList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.getByPlaceholder('What needs to be done?');   // ← CORRECT
    this.todoList = page.locator('.todo-list');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc/');
  }

  async addTodo(text: string) {
    await this.input.fill(text);
    await this.input.press('Enter');
  }

  async completeTodo(text: string) {
    const item = this.getTodoItem(text);
    await item.locator('input.toggle').check();
  }

  async deleteTodo(text: string) {
    const item = this.getTodoItem(text);
    await item.hover();
    await item.locator('button.destroy').click();
  }

  getTodoItem(text: string): Locator {
    return this.page.locator('li', { hasText: text });
  }

  async filterBy(filter: 'All' | 'Active' | 'Completed') {
    await this.page.getByRole('link', { name: filter }).click();
  }

  async clearCompleted() {
    await this.page.getByRole('button', { name: 'Clear completed' }).click();
  }
}