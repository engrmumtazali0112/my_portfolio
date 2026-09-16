import { test, expect } from '@playwright/test';

const API_BASE = 'https://jsonplaceholder.typicode.com';

test.describe('JSONPlaceholder API @api', () => {

  test('GET /posts returns 200 @smoke', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });

  test('GET /posts/1 returns correct post @sanity', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts/1`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.id).toBe(1);
    expect(body).toHaveProperty('title');
  });

  test('POST /posts creates new post @regression', async ({ request }) => {
    const response = await request.post(`${API_BASE}/posts`, {
      data: {
        title: 'QA Engineer',
        body: 'Playwright is awesome',
        userId: 1,
      },
    });
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe('QA Engineer');
  });

  test('GET /posts/99999 returns 404 @regression', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts/99999`);
    expect(response.status()).toBe(404);
  });
});