import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,

  // ── Retry logic ──────────────────────────────────────
  retries: process.env.CI ? 2 : 1,     // ← Local: 1 retry, CI: 2
  workers: process.env.CI ? 1 : undefined,

  // ── Timeouts ────────────────────────────────────────
  timeout: 60000,                       // ← 60s per test
  expect: {
    timeout: 10000,                     // ← 10s per assertion
  },

  // ── Reporter ────────────────────────────────────────
  reporter: 'html',

  // ── Global defaults for every project ───────────────
  use: {
    trace: 'retain-on-failure',        // ← Save traces on failure
    screenshot: 'only-on-failure',     // ← Save screenshots on failure
    video: 'retain-on-failure',        // ← Save videos on failure
    navigationTimeout: 45000,          // ← Page navigation: 45s
    actionTimeout: 15000,              // ← Actions (click/fill): 15s
  },

  // ── Projects ────────────────────────────────────────
  projects: [
    // 1. AUTH SETUP — runs first, saves auth.json
    {
      name: 'setup',
      testMatch: /saucedemo\/auth\.setup\.ts/,
    },

    // 2. API TESTS — no browser (fastest)
    {
      name: 'api',
      testMatch: /api\/jsonplaceholder\.spec\.ts/,
    },

    // 3. NETWORK MOCKING — with browser
    {
      name: 'mocking',
      testMatch: /api\/mocking\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },

    // 4. FIXTURES + DATA-DRIVEN tests
    {
      name: 'fixtures',
      testMatch: /.*with-fixture\.spec\.ts|.*data-driven\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 5. TODOMVC — desktop Chromium
    {
      name: 'chromium',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 6. SAUCEDEMO — authenticated tests
    {
      name: 'saucedemo',
      testMatch: /saucedemo\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },

    // 7. MOBILE — TodoMVC on Pixel 5
    {
      name: 'Mobile Chrome',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: {
        ...devices['Pixel 5'],
        navigationTimeout: 60000,      // ← Extra long for mobile flakiness
      },
    },

    // 8. VISUAL REGRESSION — screenshot comparison
    {
      name: 'visual',
      testMatch: /visual\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },
  ],
});