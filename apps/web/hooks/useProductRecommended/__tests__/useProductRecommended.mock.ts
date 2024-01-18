import { SfProduct } from '@vue-storefront/unified-data-model';

export const mockProducts: SfProduct[] = [
  {
    id: '1',
    sku: 'product-1',
    name: 'Product 1',
    slug: 'product-1',
    description: '',
    rating: {
      average: 4.5,
      count: 133,
    },
    price: {
      isDiscounted: false,
      regularPrice: {
        currency: 'USD',
        amount: 100.0,
        precisionAmount: '2',
      },
      value: {
        currency: 'USD',
        amount: 100.0,
        precisionAmount: '2',
      },
    },
    attributes: [],
    primaryImage: null,
    gallery: [],
    variants: [],
  },
];
