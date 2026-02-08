# AppRabbit QA Tests
## My Role
Built automated login test coverage using TypeScript + Playwright, including an API login test (Playwright request) and a UI E2E login test. Focused on creating repeatable test workflows, clear run instructions, and maintainable selectors/config for reliable regression checks.

## What’s Covered
- API Login Test: validates authentication endpoint response and session behavior
- UI Login E2E Test: validates end-to-end login flow via browser automation

## Tech Stack
TypeScript · Playwright (request + E2E) · Node.js / npm · Git/GitHub

Two simple tests:
1) API login test (TypeScript + Playwright request)
2) UI login test (Playwright E2E)

## How to run
```bash
npm install
npx playwright install
cp .env.sample .env   # then edit .env with your test account
npm run test:api
npm run test:ui
```

## Notes
- API_LOGIN_URL: open the login page, submit the form once, then check DevTools -> Network to copy the exact POST URL.
- Selectors are basic (name and type). Update if the real DOM is different.
