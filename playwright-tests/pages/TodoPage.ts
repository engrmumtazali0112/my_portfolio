async deleteTodo(text: string) {
    const item = this.getTodoItem(text);
    await item.hover();
    await item.locator('button.destroy').click();
  }  // ✅ Closing brace