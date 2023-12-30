# playwright-examples

[![Playwright Tests](https://github.com/helloitsdave/playwright-examples/actions/workflows/playwright.yml/badge.svg)](https://github.com/helloitsdave/playwright-examples/actions/workflows/playwright.yml)
[![ESLint](https://github.com/helloitsdave/playwright-examples/actions/workflows/eslint.yml/badge.svg)](https://github.com/helloitsdave/playwright-examples/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/helloitsdave/playwright-examples/actions/workflows/codeql.yml/badge.svg)](https://github.com/helloitsdave/playwright-examples/actions/workflows/codeql.yml)

Playwright.io Typescript Framework including

- Basic UI test against [https://playwright.dev/](https://playwright.dev/)
- GraphQL API example against [https://api.github.com/graphql](https://api.github.com/graphql)
- Rest API example against [https://petstore.swagger.io/v2/pet](https://petstore.swagger.io/v2/pet)
- eslint configuration
- Github Actions for linting, test execution and CodeQL analysis

## Installation

```bash
npm install
npx playwright install
```

### Run UI tests

```bash
npm run tests:ui
```

### Run API tests

```bash
npm run tests:api
```
