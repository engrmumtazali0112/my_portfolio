import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    channel: 'chrome',   // ← GLOBAL: use installed Chrome everywhere
  },

  projects: [
    {
      name: 'setup',
      testMatch: /saucedemo\/auth\.setup\.ts/,
    },
    {
      name: 'chromium',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'saucedemo',
      testMatch: /saucedemo\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },
    {
      name: 'Mobile Chrome',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: {
        ...devices['Pixel 5'],
      },
    },
  ],
});