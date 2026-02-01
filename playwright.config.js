// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60 * 1000,
  retries: 0,
 reporter: [
  ['list'],
  ['html', { open: 'never' }],
  ['json', { outputFile: 'results/report.json' }]
],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 }
  }
});
