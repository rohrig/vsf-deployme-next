import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { initSDK, buildModule } from '@vue-storefront/sdk';
import classNames from 'classnames';
import { appWithTranslation } from 'next-i18next';
import { boilerplateModule, BoilerplateModuleType } from 'vsf-deployme-sdk';
import { SdkProvider } from '~/sdk';
import { fontBody, fontHeadings } from '~/styles/fonts';
import '~/styles/main.scss';

const sdkConfig = {
  boilerplate: buildModule<BoilerplateModuleType>(boilerplateModule, {
    apiUrl: `${process.env.MIDDLEWARE_URL}/api/boilerplate`,
  }),
};

export const sdk = initSDK<typeof sdkConfig>(sdkConfig);

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          mutations: {
            retry: 3,
            retryDelay: (failureCount) => 500 * 2 ** failureCount,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <SdkProvider>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name="description" content="VSF x Next.js (Boilerplate)" />
          <title>Vue Storefront React Boilerplate</title>
        </Head>
        <Hydrate state={pageProps.dehydratedState}>
          <div className={classNames(fontHeadings.variable, fontBody.variable, 'font-body')}>
            <Component {...pageProps} />
          </div>
        </Hydrate>
        <ReactQueryDevtools />
      </SdkProvider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
