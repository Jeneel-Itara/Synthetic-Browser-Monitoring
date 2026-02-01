// tests/iamops-accessibility.spec.js
require('dotenv').config();
const { test, expect } = require('@playwright/test');

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error('BASE_URL is not defined in .env file');
}

// Only paths here — no hardcoded domain
const paths = [
  '/',
  '/devops-services/',
  '/finops-services/',
  '/devsecops-services/',
  '/24-7-noc-services/',
  '/qa-automation-services/',
  '/our-story/',
  '/success-stories/',
  '/success-stories/devops/',
  '/success-stories/finops/',
  '/success-stories/devsecops/',
  '/success-stories/noc-24-7/',
  '/success-stories/qa-automation/',
  '/newsletter/',
  '/blogs/',
  '/news/',
  '/iam-podcast/',
  '/careers/',
  '/careers/#applynow',
  '/careers/dev-team-lead/',
  '/careers/dev-team-lead/#apply-now',
  '/thispagedoesnotexist/'
];

for (const path of paths) {
  const url = `${BASE_URL}${path}`;

  test(`Page is accessible: ${url}`, async ({ page }) => {
    const response = await page.goto(url, {
      waitUntil: 'domcontentloaded'
    });

    // HTTP-level check
    expect(response, 'No response received').not.toBeNull();
    expect(response.status(), `Bad status for ${url}`)
      .toBeLessThan(400);

    // Browser-level check
    await expect(page.locator('body')).toBeVisible();

    // Basic content sanity check
    const title = await page.title();
    expect(title.length, 'Empty page title').toBeGreaterThan(0);

    console.log(`✅ ${url} loaded successfully`);
  });
}
