import { CreateSdkOptions, createSdk } from '@vue-storefront/next';
import { SdkModule, sdkModule } from '@vue-storefront/storefront-boilerplate-sdk';
import { BoilerplateModuleType, boilerplateModule } from 'vsf-deployme-sdk';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const options: CreateSdkOptions = {
  middleware: {
    apiUrl: `${baseUrl}/api/`,
  },
};

export const { getSdk } = createSdk(options, ({ buildModule }) => ({
  commerce: buildModule<SdkModule>(sdkModule),
  boilerplate: buildModule<BoilerplateModuleType>(boilerplateModule),
}));

export type Sdk = ReturnType<typeof getSdk>;
