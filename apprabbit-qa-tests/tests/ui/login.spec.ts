import { test, expect } from "@playwright/test";
require("dotenv").config();

// UI test that mimics a real user logging into the admin dashboard.
// Steps:
// 1) open the login page
// 2) fill email + password
// 3) click submit
// 4) check that we land on the dashboard
test("User can log into the admin dashboard", async ({ page }) => {
  const email = process.env.ADMIN_EMAIL || "";
  const password = process.env.ADMIN_PASSWORD || "";

  // Go to the login page directly by URL
  await page.goto("https://app.apprabbit.com/login");

  // Fill in the form (basic CSS selectors; update if DOM changes)
  await page.locator('input[name="email"]').fill(email);
  await page.locator('input[name="password"]').fill(password);

  // Submit the form
  await page.locator('button[type="submit"]').click();

  // Wait a bit for navigation/network to settle
  await page.waitForLoadState("networkidle");

  // Simple check: URL should include "dashboard" after successful login
  await expect(page).toHaveURL(/dashboard/);
});