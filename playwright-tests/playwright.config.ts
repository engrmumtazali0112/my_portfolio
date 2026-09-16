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
  },

  projects: [
  // 1. Auth setup — runs FIRST
  {
    name: 'setup',
    testMatch: /saucedemo\/auth\.setup\.ts/,
  },

  // 2. API tests — no browser needed ← ADD THIS
  {
    name: 'api',
    testMatch: /api\/jsonplaceholder\.spec\.ts/,   // ← specific file
  },
  {
    name: 'mocking',
    testMatch: /api\/mocking\.spec\.ts/,
    use: { ...devices['Desktop Chrome'] },
    dependencies: ['setup'],
  },
   
  {
    name: 'fixtures',
    testMatch: /.*with-fixture\.spec\.ts|.*data-driven\.spec\.ts/,
    use: { ...devices['Desktop Chrome'] },
  },

  // 3. TodoMVC — desktop Chromium
  {
    name: 'chromium',
    testMatch: /todomvc\/.*\.spec\.ts/,
    use: { ...devices['Desktop Chrome'] },
  },

  // 4. SauceDemo — auth session
  {
    name: 'saucedemo',
    testMatch: /saucedemo\/.*\.spec\.ts/,
    use: {
      ...devices['Desktop Chrome'],
      storageState: 'auth.json',
    },
    dependencies: ['setup'],
  },

  // 5. Mobile
  {
    name: 'Mobile Chrome',
    testMatch: /todomvc\/.*\.spec\.ts/,
    use: { ...devices['Pixel 5'] },
  },
  {
  name: 'visual',
  testMatch: /visual\/.*\.spec\.ts/,
  use: {
    ...devices['Desktop Chrome'],
    // Screenshots will use this viewport
    viewport: { width: 1280, height: 720 },
  },
},
],
});