import { useState } from 'react';
import { SfButton } from '@storefront-ui/react';
import { RenderJson } from '~/components/RenderJson';
import { sdk } from '~/pages/_app';

export default function PageGetT11() {
  const [data, setData] = useState<null | Object>(null);

  const hitExampleMethodApi = async () => {
    const data = await sdk.boilerplate.getProduct('1');
    setData(data);
  };

  return (
    <>
      <main className="flex flex-col items-center py-24 gap-12  text-white">
        <SfButton type="button" onClick={hitExampleMethodApi}>
          Call getProduct
        </SfButton>

        <div className="w-[500px] h-min-12 h-auto p-4 bg-gray-900 rounded-md flex items-center justify-center">
          {data ? <RenderJson json={data} /> : 'Click the button'}
        </div>
      </main>
    </>
  );
}
