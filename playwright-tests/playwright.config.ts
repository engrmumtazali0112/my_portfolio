import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// ── BDD Config ─────────────────────────────────────
const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/steps/**/*.ts',
  outputDir: '.features-gen',
});

export default defineConfig({
  testDir: './tests',              // ← MUST be here (main tests)
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60000,
  expect: { timeout: 10000 },
  reporter: 'html',

  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 45000,
    actionTimeout: 15000,
  },

  projects: [
    // 1. AUTH SETUP
    { name: 'setup', testMatch: /saucedemo\/auth\.setup\.ts/ },

    // 2. API
    { name: 'api', testMatch: /api\/jsonplaceholder\.spec\.ts/ },

    // 3. MOCKING
    {
      name: 'mocking',
      testMatch: /api\/mocking\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },

    // 4. FIXTURES
    {
      name: 'fixtures',
      testMatch: /.*with-fixture\.spec\.ts|.*data-driven\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 5. CHROMIUM
    {
      name: 'chromium',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 6. SAUCEDEMO
    {
      name: 'saucedemo',
      testMatch: /saucedemo\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },

    // 7. MOBILE
    {
      name: 'Mobile Chrome',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: {
        ...devices['Pixel 5'],
        navigationTimeout: 60000,
      },
    },

    // 8. VISUAL
    {
      name: 'visual',
      testMatch: /visual\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },

    // 9. BDD ← This project has its OWN testDir
    {
      name: 'bdd',
      testDir: bddTestDir,      // ← BDD uses its own generated dir
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});