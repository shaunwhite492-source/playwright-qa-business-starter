# Playwright QA Business Starter

**A ready-to-customize sales portfolio + fictional SaaS QA demo + Playwright tests + CI + $249 audit business templates.**

> This is an original fictional demonstration. It does **not** represent real client work, real user authentication, or secure production account management. Do not enter real credentials. Replace `YOUR_*` placeholders before publishing.

## Contents

```
playwright-qa-business-starter/
├── demo-app/                  # Fictional Northstar Portal (HTML/CSS/JS)
├── docs/                      # GitHub Pages portfolio and copied live demo
│   ├── index.html             # Portfolio (replace YOUR_* placeholders)
│   └── demo/                  # Demo copy; refresh with npm run sync:demo
├── tests/                     # Browser tests (TypeScript)
├── .github/workflows/         # Playwright tests run on push/PR
├── scripts/sync-demo.mjs      # Refresh live demo from canonical app files
├── templates/                 # Offer, proposal, audit report, intake, outreach, prospect tracker
├── playwright.config.ts
└── package.json
```

## 1. Run locally

Requires current Node.js 22+ and npm. Install packages:

```bash
npm install
npx playwright install chromium
```

`npm install` creates `package-lock.json`; **commit that lock file** so GitHub Actions can run `npm ci`.

To run the fictional app:

```bash
npm run dev
```

Visit http://127.0.0.1:4173 and sign in with the **public demo-only** credentials displayed on the login screen.

Run tests (Playwright starts its own server if needed):

```bash
npm run test:e2e
npm run test:report
```

Debug in UI mode:

```bash
npm run test:ui
```

## 2. Personalize your portfolio

Edit `docs/index.html` and replace every instance of:
- `YOUR NAME` and `YOUR NAME.`
- `YOUR_EMAIL` (use an actual email address)
- `YOUR_GITHUB_USERNAME`
- `YOUR_LINKEDIN_SLUG`

The starter site is intentionally simple and has **no fake customer reviews or fabricated commercial results**.

Preview the site by opening `docs/index.html` locally, or using VS Code Live Server. Open `docs/demo/index.html` to preview the public demo copy. If you modify `demo-app/`, refresh the site copy before committing:

```bash
npm run sync:demo
```

## 3. Publish to GitHub and enable CI

From the extracted project folder:

```bash
git init
git add .
git commit -m "Initial Playwright QA portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/playwright-qa-business-starter.git
git push -u origin main
```

Create an empty public GitHub repository named `playwright-qa-business-starter` before pushing. Use GitHub's normal authentication process; don't embed credentials in remote URLs or in files. GitHub Actions automatically runs the tests on push/PR after workflows are permitted.

To host the site: in GitHub repository **Settings → Pages → Build and deployment → Deploy from a branch**, choose **main** and **/docs**, then **Save**. Your portfolio becomes available at:

`https://YOUR_GITHUB_USERNAME.github.io/playwright-qa-business-starter/`

The fictional live demo is under `/demo/` on the same site. Check the Pages URL in the repo Settings once deployment finishes.

If you rename the repo, update the hard-coded GitHub source link in `docs/index.html`.

## 4. Film a 60–90 second demo video

1. Show the public app and state clearly that it is a fictional mock.
2. Run `npm run test:e2e` or Playwright UI mode to demonstrate assertions.
3. Open a completed GitHub Actions run and its report artifact.
4. Explain what the tests cover, which scenarios they do *not* cover, and why isolated test data matter.
5. Add the video to your portfolio (e.g. linked in the demo project section).

## 5. Sell the fixed-scope $249 audit

Use `templates/249-qa-audit-offer.md`, `client-proposal.md`, `client-intake.md`, and `sample-audit-report.md`.

- Max three client-approved workflows, one desktop Chromium browser and viewport.
- Up to two hours hands-on testing + one hour documenting.
- Client receives pass/fail summary and up to eight findings **if any are discovered**; no guaranteed defects.
- Written testing permission, test-only account, and agreement before testing.
- No automated test development or bug fixing in the $249 fixed scope.
- Target delivery is three business days **after** access, scope, and scheduling are confirmed.

Never perform tests beyond a client's explicit authorization. Avoid real customer data. Price is gross revenue, not profit.

## 6. Weekly sales habit

- Reach out thoughtfully to 10–15 relevant companies or founder contacts.
- Send 3–5 tightly matched freelance proposals.
- Follow up once with prior prospects; keep a tracker (`templates/prospect-tracker.csv`).
- Adapt one demo video and your audit scope for conversations.

## Suggested next upgrade

Turn this into a more credible showcase by adding network error simulation, a bug intentionally seeded behind a testing flag, accessibility checks, API contract tests, or a second cross-browser CI project. Only include features you can explain and maintain.

## Tools and references

- Playwright documentation: https://playwright.dev/docs/intro
- Playwright `webServer` config: https://playwright.dev/docs/test-webserver
- Playwright CI docs: https://playwright.dev/docs/ci-intro
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
