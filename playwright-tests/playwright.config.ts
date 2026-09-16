import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// ── BDD Config ─────────────────────────────────────
const bddTestDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'features/steps/**/*.ts',
  outputDir: '.features-gen',
});

// ── Skip visual tests in CI (Windows baselines vs Linux CI) ──
const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  timeout: 60000,
  expect: { timeout: 10000 },
  reporter: 'html',

  // ── Global defaults ─────────────────────────────
  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 45000,
    actionTimeout: 15000,
  },

  // ── Projects ────────────────────────────────────
  projects: [
    // 1. AUTH SETUP — runs first
    {
      name: 'setup',
      testMatch: /saucedemo\/auth\.setup\.ts/,
    },

    // 2. API TESTS — no browser
    {
      name: 'api',
      testMatch: /api\/jsonplaceholder\.spec\.ts/,
    },

    // 3. NETWORK MOCKING
    {
      name: 'mocking',
      testMatch: /api\/mocking\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
    },

    // 4. FIXTURES + DATA-DRIVEN
    {
      name: 'fixtures',
      testMatch: /.*with-fixture\.spec\.ts|.*data-driven\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 5. TODOMVC — desktop
    {
      name: 'chromium',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },

    // 6. SAUCEDEMO — authenticated
    {
      name: 'saucedemo',
      testMatch: /saucedemo\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
    },

    // 7. MOBILE — Pixel 5
    {
      name: 'Mobile Chrome',
      testMatch: /todomvc\/.*\.spec\.ts/,
      use: {
        ...devices['Pixel 5'],
        navigationTimeout: 60000,
      },
    },

    // 8. VISUAL — desktop (SKIP on CI)
    {
      name: 'visual',
      testMatch: /visual\/.*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: 'auth.json',
      },
      dependencies: ['setup'],
      // ✅ Skip visual tests on CI (baselines are Windows-only)
      ...(isCI ? { testIgnore: /.*/ } : {}),
    },

    // 9. BDD — Cucumber/Gherkin
    {
      name: 'bdd',
      testDir: bddTestDir,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});