# Detailed overview & further development guide

Welcome to the Vue Storefront Boilerplate for the [Next.js 13+](https://nextjs.org/) project! This guide will provide you with an overview of the project structure, tools, and best practices to help you get started quickly.

### Project Structure

This project is built using [TurboRepo](https://turbo.build/repo), a powerful development tool that enables efficient monorepo management and simplifies the process of building and maintaining complex software systems. By leveraging TurboRepo's features, this project has achieved a scalable and modular architecture, allowing for easy collaboration among multiple teams and ensuring consistent development practices across the codebase.

For detailed information on how to get started, configure, and use this project built with TurboRepo, please refer to the [official documentation](https://turbo.build/repo/docs).

This Turborepo includes the following apps:

- `server` - Vue Storefront Middleware server
- `web` - A web application powered by Next.js

#### Server Middleware

The server application is a core of a Vue Storefront application. It allows connecting services like E-commerce platform, CMS, or Payment providers to your application.

```shell

apps/
 └── server/
     ├── src/
     │   └── index.ts            # Middleware server entry
     ├── .eslint.js              # ESLint configuration
     ├── jest.config.ts          # Jest configuration
     ├── middleware.config.ts    # Middleware configuration
     ├── nodemon.json                 # Nodemon configuration
     ├── package.json            # Project dependencies
     └── tsconfig.json           # TypeScript configuration

```

The most important files of the `Server Middleware` app are:

- `src/index.ts` - Express server entry point that handles all requests to the third-party platforms from the SDK
- `middleware.config.ts` - Vue Storefront Middleware configuration

For more info about `Server Middleware` refer to the [documentation](https://docs.vuestorefront.io/v2/architecture/server-middleware.html).

> **Warning**
> This project does not come with pre-packaged integrations for the sake of simplicity. However, you have the flexibility to develop custom integrations or utilize our official integrations to connect the Middleware with actual data sources.
>
> You can choose from our official integrations, which provide pre-built connectors for various data sources and services. These integrations are designed and maintained by the VSF team as well as partners, ensuring a seamless integration experience.
> 
> Check out [official VSF Middleware integrations](https://docs.vuestorefront.io/v2/integrations/) to get started quickly.
>
> If your project requires custom integrations tailored to specific data sources or services, our project offers a flexible framework and comprehensive documentation to guide you through the process. By following our guidelines and leveraging the capabilities of the Middleware, you can effortlessly develop custom integrations that meet your unique requirements.
> 
> For more information on developing custom integrations, please refer to the [Integrating e-commerce platform documentation](https://docs.vuestorefront.io/v2/integrate/integration-guide.html).

> **Note**
> If you are migrating your project from Nuxt 2, the `src/index.ts` file serves as the equivalent of the Server's Middleware `middleware.js` entry point.


#### Web application

Web app follows a Next.js' [Pages Router](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts) file structure:

```shell

apps/
 └── web/
     ├── ...
     ├── components/              # Project Components
     │   ├── Footer/
     │   ├── ...
     │   └── ui                   # StorefrontUI block components
     ├── hooks/                   # Custom hooks
     ├── layouts/                 # Layouts
     ├── mocks/                   # Static data
     ├── pages/                   # Pages
     │   ├── _app.tsx             # Custom App component
     │   ├── _document.tsx        # Custom Document component
     │   ├── index.tsx            # Home page
     │   └── ...
     ├── public/                  # Public assets
     ├── sdk/                     # Vue Storefront SDK configuration
     ├── styles/                  # Project CSS configuration
     ├── .eslint.js               # ESLint configuration
     ├── .lintstagedrc.js         # Lint-Staged configuration
     ├── jest.config.ts           # Jest configuration
     ├── next.config.js           # Next.Js configuration
     ├── package.json             # Project dependencies
     ├── tailwind.config.js       # TailwindCSS configuration
     ├── tsconfig.json            # TypeScript configuration
     └── ...

```

List of essential directories:
- `sdk` [Vue Storefront SDK](https://docs.vuestorefront.io/sdk/) module configuration
- `components/ui` Storefront UI Block components, like `ProductCard` or `Review`
- `hooks` reusable hook functions, e.g. data fetching and UI hooks
- `mocks`  mock data used across the application, e.g. footer links

### Functions

This project follows a few conventions to help with organizing your code:

- Each function is located in a dedicated module and exported from the `index.ts` file.
- Names are short and descriptive.
- Functions are exported using named export.
- Modules are matching the name of the function.
- TypeScript types and tests are located close to the function file.

Expected file/folder structure:

```shell
<module-directory>/
 └── Function/
     ├─ index.ts
     ├─ types.ts
     ├─ Function.tsx
     └─ __tests__/
         └─ Function.spec.tsx
```

### Hooks

React hooks are useful when stateful logic has to be reused across components - e.g. handling product data or controlling component state.
Project hooks are located in the `/apps/web/hooks/` directory and each have the following structure:

```shell
hooks/
 └── useProduct/
     ├─ index.ts
     ├─ types.ts
     ├─ useProduct.ts
     └─ __tests__/
         └─ useProduct.spec.ts
```

Naming convention:

- each hook should be prefixed with `use` keyword (`useProduct`)
- hooks should follow `Camel case` pattern (`useProductReviews`)

### Components

Components used in the boilerplate web app are located in the `components` directory and each component has the following file structure:

- Project components
  - Representational components that are designed to fulfill project requirements.
  - TypeScript types and tests ale located close to the component
  
  Expected file/folder structure:

```shell
components/
 └── Footer/
     ├─ index.ts
     ├─ types.ts
     ├─ Footer.tsx
     └─ __tests__/
         └─ Footer.spec.tsx
```

- Storefront UI 2 Block components
  - Reusable/generic components used across the monorepo.
  - TypeScript types and tests are located close to the component
  
  Expected file/folder structure:

```shell
components/
 └── ui/
     └── Display/
         ├─ index.ts
         ├─ types.ts
         ├─ Display.tsx
         └─ __tests__/
            └─ Display.spec.tsx
```

For more information about available StorefrontUI 2 Block components for React, check out [documentation](https://docs.storefrontui.io/v2/react/blocks.html).

Naming convention:

- React components should follow `Pascal case` pattern (`CategoryFilters`, `Heading`)
- The types for component's props should be named `{Component}Props`. For example, `GalleryProps` or `HeadingProps`

#### Vue storefront SDK and data fetching

The data fetching process is handled seamlessly by integrating VSF SDK, which acts as a robust communication layer between the application and the VSF Middleware. The SDK provides a set of convenient and optimized methods to fetch data from various APIs and services.

To simplify the implementation and management of data fetching, React Query is employed as a powerful state management library. It seamlessly integrates with VSF SDK and simplifies the process of caching, synchronizing, and managing the application's data. React Query's intuitive hooks and query functions provide an elegant and efficient way to handle asynchronous data fetching, automatically managing data caching, refetching, and background updates.

By combining VSF SDK with React Query, this project ensures a reliable and performant data fetching experience for the application. Developers can easily fetch, update, and maintain data using React Query's declarative approach, while the VSF SDK handles the underlying communication and data retrieval tasks.

> **Note**
> For development and testing purposes, the project uses mocked data provided by the `@vue-storefront/integration-boilerplate-sdk` library.
>
> In a production scenario, is necessary to connect connectors to interface with actual data sources. The `@vue-storefront/integration-boilerplate-sdk` library serves as a foundation and offers the necessary abstractions and guidelines to facilitate the development of custom connectors.
>
> Check out [VSF SDK official integration modules](https://docs.vuestorefront.io/sdk/modules/).

For detailed information on how to get started, configure, and use this project built with VSF SDK and ReactQuery, please refer to the [VSF SDK official documentation](https://docs.vuestorefront.io/sdk/sdk/) and [React-Query documentation](https://tanstack.com/query/v4).

### Localization

The boilerplate ships with a basic setup for i18n localization powered by the [Next-i18next](https://next.i18next.com/) library. Project locale translations are stored in `public/[locale]/[namespace].json` files. Translations are grouped by _features_, and imported only where required to minimize bundle size.
Refer to the [Next-i18n documentation](https://next.i18next.com/) for the translating content with SSR.

### Testing

The project provides a basic setup for testing JS code with `Jest` and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing React components.
Testing configuration files:

- `jest.config.ts` - `Jest` config file.
- `jest.setup.ts` - mocks for third party (`next-i18next`) and global (`window`) objects.
- `jest.utils.tsx` - testing wrapper for `React-Query`, refer to the [official documentation](https://tanstack.com/query/v4/docs/react/guides/testing) for more info.


### Conventions enforced by automated tooling

To help you code with best practices in mind, this boilerplate comes with some automated tooling.

- All test descriptions follow naming convention `it('should ... ')`.
- Commit message enforces [Conventional Commits](https://www.conventionalcommits.org/) specification and use [commitizen](http://commitizen.github.io/cz-cli/) library.
- Automatic code linting is managed by [lint-staged](https://github.com/okonet/lint-staged) library and [Husky](https://typicode.github.io/husky/)

### Performance tools

In order to optimize and enhance the performance of the application, several performance tools have been integrated into the development workflow.
#### Next.js Bundle Analyzer

[The Next.js Bundle Analyzer](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer) is a valuable performance tool employed in this project. It integrates [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) into the application and provides insights into the size and composition of the application's JavaScript bundles, allowing developers to identify and analyze any potential bottlenecks or optimizations. By visualizing the bundle size and dependencies, the Bundle Analyzer helps in identifying opportunities for code splitting, reducing bundle sizes, and optimizing the overall performance of the application.

> **Note**
> To analyze your app bundles run `yarn build:analyze` command.

#### Web performance automated testing

As one of our main goals is to help you deliver fast, performant websites, we included and configured CI/CD performance testing tools into this boilerplate.


The purpose of these tests is to help you catch performance regressions during the development process. For example, if you accidentally include a large library or create a long task that will not meet your performance criteria you will get an error/warning.

There are 2 options to run those tests:


**Run tests manually on the local environment**

To run the Lighthouse CI (LHCI) test, go to your main project folder and run the following command
```shell
yarn lhci:mobile
```

If you didn’t run the production build earlier, before running test you will need to  

install all dependencies by 
```shell
yarn install
```

then build project
```shell
yarn build
```


LHCI configuration + assertion values are stored in 
/lighthouserc.json

You can find more information about configuring LHCI in [THIS ARTICLE](https://web.dev/lighthouse-ci/) and in [official documentation](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md).



**Run tests automatically on GitHub Action**

In the default configuration, automatic LHCI tests will run on every PR. you don’t even need to have the codebase released, the build is done automatically during the Github Action.


You can find workflow configuration at
/.github/workflows/run-lhci-test.yml

You can configure your LHCI tests to block the merging of a Pull Request if the performance results fall below a certain threshold.

#### More about performance
Additional performance good practices and information can be found [HERE](https://docs.vuestorefront.io/v2/performance/intro.html).
