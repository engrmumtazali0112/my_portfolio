# 🎭 Playwright QA Automation Framework

A production-grade test automation framework built with **Playwright** and **TypeScript**, covering UI, API, mobile, visual, and BDD testing.

## 📊 Test Coverage

| Category | Count | Description |
|----------|-------|-------------|
| API Tests | 4 | REST API testing (JSONPlaceholder) |
| Network Mocking | 5 | `page.route()` for error scenarios |
| UI Tests (Desktop) | 4 | TodoMVC CRUD operations |
| UI Tests (Mobile) | 4 | Pixel 5 viewport |
| Authenticated Tests | 8 | SauceDemo with `storageState` |
| Visual Regression | 3 | Screenshot comparison |
| Data-Driven Tests | 11 | Multiple users from JSON |
| BDD (Cucumber) | 5 | Gherkin scenarios |
| **Total** | **45** | All passing |

## 🛠️ Tech Stack

- **Playwright** 4.x
- **TypeScript**
- **playwright-bdd** (Cucumber/Gherkin)
- **GitHub Actions** (CI/CD with 4-shard parallelism)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install browsers
npx playwright install chromium

# Run all tests
npx playwright test

# Run by project
npx playwright test --project=api
npx playwright test --project=bdd
npx playwright test --project=visual

# Run by tag
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"

# View HTML report
npx playwright show-report

playwright-tests/
├── pages/                    # Page Object Models
│   ├── TodoPage.ts
│   └── LoginPage.ts
├── fixtures/                 # Custom Playwright fixtures
│   └── pages.ts
├── test-data/                # Test data files
│   └── users.json
├── features/                 # BDD scenarios
│   ├── login.feature
│   └── steps/
│       └── login.steps.ts
├── tests/                    # Test specs
│   ├── api/
│   ├── saucedemo/
│   ├── todomvc/
│   └── visual/
├── playwright.config.ts      # Main configuration
└── package.json

🏗️ Architecture Highlights
Page Object Model — Reusable page interactions

Tagged tests — @smoke, @sanity, @regression, @bdd, @hybrid, @mocking

Auth reuse — storageState saves 5s per test

API-first setup — Fast data creation

Network mocking — Test error paths safely

Visual regression — Catch UI changes

Trace/video on failure — Debug CI issues

BDD with Cucumber — Plain English test scenarios

4-shard CI — 4x parallel test execution

🎯 Key Features
Custom Fixtures
typescript
test('can add todo', async ({ page, todoPage }) => {
  await todoPage.goto();
  await todoPage.addTodo('Buy milk');
  // ...
});
Hybrid Tests (API + UI)
typescript
test('verify via API and UI', async ({ page, request }) => {
  const apiRes = await request.get('/api/health');
  expect(apiRes.status()).toBe(200);
  await page.goto('/inventory');
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});
BDD Scenarios
gherkin
Scenario: Successful login with valid credentials
  When I login with username "standard_user" and password "secret_sauce"
  Then I should see the inventory page
  And I should see 6 products
🔄 CI/CD
GitHub Actions runs on every push with 4 parallel shards:

Shard 1: 11 tests

Shard 2: 10 tests

Shard 3: 11 tests

Shard 4: 10 tests

Total CI time: ~40 seconds (vs ~2 minutes for serial).

📈 Best Practices Implemented
✅ Page Object Model

✅ Tagged tests for selective runs

✅ storageState for fast auth

✅ Retries for flaky networks

✅ Traces on failure

✅ Data-driven tests

✅ Environment variables (.env)

✅ TypeScript strict mode

✅ CI/CD with caching

✅ Cross-project test organization