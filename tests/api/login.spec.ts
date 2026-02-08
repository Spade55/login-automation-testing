import { test, expect, request } from "@playwright/test";
require("dotenv").config();

// Simple API test for the login flow.
// Idea: call the login endpoint directly with email + password,
// then check if we get 200 OK and a token in the JSON response.
test("Login API returns a token", async () => {
  const apiUrl = process.env.API_LOGIN_URL;
  const email = process.env.ADMIN_EMAIL;
  const password = process.env.ADMIN_PASSWORD;

  // Basic sanity checks for env values
  expect(apiUrl, "Please set API_LOGIN_URL in .env").toBeTruthy();
  expect(email, "Please set ADMIN_EMAIL in .env").toBeTruthy();
  expect(password, "Please set ADMIN_PASSWORD in .env").toBeTruthy();

  // Create a request context (no browser UI here)
  const api = await request.newContext();

  // Send POST request to the login API
  const res = await api.post(apiUrl!, {
    headers: { "Content-Type": "application/json" },
    data: { email, password }
  });

  // Expect HTTP 200 for a successful login
  expect(res.status(), "Unexpected status code").toBe(200);

  // Read JSON and print it for debugging (useful when something fails)
  const json = await res.json();
  console.log("Login JSON:", json);

  // Many APIs use different key names. Here we assume "token"
  // Update this if the real API returns something like "access_token"
  expect(json.token, "No token field in response JSON").toBeTruthy();
});