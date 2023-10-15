# Test Shopify App Template - Remix

This is a template for testing [Shopify apps](https://shopify.dev/docs/apps/getting-started) built using the [Remix](https://remix.run) framework.

This template demonstrates how to use Vitest, Testing Library, and `@remix-run/testing` to test routes and components built with Polaris components, and how to use Playwright to do end-to-end testing for Shopify apps.

You can ask questions in the [Discussions section of the GitHub repository](https://github.com/btomaj/shopify-app-template-remix-testing/discussions).

Rather than cloning this repo, you can follow the [quick start steps](#quick-start) to set up your Shopify Remix app with tests. 

You can [preview the route and component tests on Stackblitz⚡](https://stackblitz.com/~/github.com/btomaj/shopify-app-template-remix-testing/tree/dev). Once loaded, you can make changes to `/tests/routes/AdditionalPage.test.jsx`, and see the test rerun.

You can preview the end-to-end tests by cloning this repo and running `npm install && npx create-playwright --quiet && npm run predev && npx playwright test`. Stackblitz can't support Playwright.

## Quick start
Follow these steps to add testing to your Shopify app built with the Remix framework.

### Prerequisites
You must [initialise a Remix app using the Shopify CLI](https://shopify.dev/docs/apps/getting-started/create).

### Setup
First, change "`@2.0.0`" in the line below to match the version of `@remix-run/react` in your `package.json` file, and run:
```
npm i -D @remix-run/testing@2.0.0
```
Second, run: 
```
npm i -D vitest @vitejs/plugin-react vite-tsconfig-paths jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @shopify/shopify-app-session-storage-memory
```
Finally, run:
```
npm init playwright
```

### Route and component testing
1. Copy the `tests` directory to the root directory of your project.
1. Copy the `vitest.config.ts` and `vitest.workspace.ts` files to the root directory of your project.
1. From your command line, run `npx vitest` to test routes and components.

### End-to-end testing
1. Copy the `tests` directory to the root directory of your project if you haven't done this yet.
1. Copy the `playwright.config.ts` and `.gitignore` files to the root directory of your project.
1. If you haven't yet run `npm run dev` nor `npm run shopify dev`, from your command line, run `npm run predev`.
1. From your command line, run `npx playwright test` for end-to-end testing.

## (In)frequently Asked Questions
- What is `@testing-library/polaris`?

  `@testing-library/polaris` is not a real package. It is a Vitest alias and TypeScript path set up in config files for convenience.

- Why are you using Vitest workspaces?

  Vitest workspaces contain the `@testing-library/polaris` alias and the Shopify mocks to the directories with Polaris and Shopify tests.

- Why do I need to run `npm run predev && npx remix build`?

  In a Shopify Remix app project, `npm run dev` and `npm run shopify dev` apply Prisma migrations. If you haven't yet run these commands in your project, you need to manually apply the Prisma migrations by running `npm run predev` before running Playwright. 

## Resources
- [Vitest](https://vitest.dev/guide/)
- [Remix testing](https://testing.epicweb.dev/07)
- [Testing Library](https://testing-library.com/docs/learning/)
- [Testing Library Vitest/Jest matchers](https://github.com/testing-library/jest-dom#custom-matchers)
- [Playwright](https://playwright.dev/docs/intro)

## Change log
- 2023-10-08 - Added end-to-end testing through Playwright
- 2023-10-05 - Added unit testing through Vitest, Testing Library, and `@remix-run/testing`.