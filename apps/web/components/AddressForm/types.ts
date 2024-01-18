type AddressFields =
  | 'firstName'
  | 'lastName'
  | 'phone'
  | 'country'
  | 'streetName'
  | 'streetNumber'
  | 'city'
  | 'state'
  | 'postalCode';

export type AddressFormFields = Record<AddressFields, string>;

export type AddressFormProps = {
  type: 'billingAddress' | 'shippingAddress';
  onSave?: () => void;
  onClear?: () => void;
  savedAddress?: AddressFormFields | undefined;
};
