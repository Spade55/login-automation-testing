import { defineConfig } from '@playwright/test';

// Minimal config: run tests in the "tests" folder.
export default defineConfig({
  testDir: './tests',
  use: {
    // Keep defaults simple. Traces/screenshots only when a test fails.
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});