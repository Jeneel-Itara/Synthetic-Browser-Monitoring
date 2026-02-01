# IAMOps Synthetic Browser Monitoring

A Playwright-based synthetic monitoring tool for testing website accessibility and basic functionality across multiple pages.

## Overview

This project performs automated browser-based monitoring of the IAMOps website, checking that all critical pages load successfully and meet basic accessibility criteria. It uses Playwright to simulate real browser interactions and validate page health.

## Features

- **Automated Page Testing**: Tests multiple predefined paths on the website
- **HTTP Status Validation**: Ensures all pages return successful HTTP status codes (< 400)
- **Browser-Level Checks**: Verifies pages load properly in the browser
- **Content Sanity Checks**: Validates page titles and basic content presence
- **Headed/Headless Modes**: Support for both visual and automated testing modes

## Prerequisites

- Node.js (v14 or higher)
- npm

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory
2. Add your base URL:
   ```
   BASE_URL=https://iamops.io
   ```

## Usage

### Run Tests (Headless)
```bash
npm test
```

### Run Tests (Headed - Visual Mode)
```bash
npm run test:headed
```

### View Test Reports
```bash
npm run report
```

## Test Coverage

The monitoring covers the following pages:
- Homepage (`/`)
- Service pages (`/devops-services/`, `/finops-services/`, etc.)
- Success stories and related pages
- Blog, news, and podcast pages
- Career pages
- Newsletter signup
- Error page testing (`/thispagedoesnotexist/`)

## Test Results

Test results are stored in:
- `results/report.json` - JSON test results
- `test-results/` - Detailed test artifacts
- `playwright-report/` - HTML report (generated with `npm run report`)

## Dependencies

- **@playwright/test**: Browser automation framework
- **dotenv**: Environment variable management

## Contributing

1. Add new page paths to the `paths` array in `tests/iamops-accessibility.spec.js`
2. Update the README if adding new features
3. Ensure all tests pass before committing

## License

[Add license information here]