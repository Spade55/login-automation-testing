# AppRabbit QA Tests (Student Version)

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