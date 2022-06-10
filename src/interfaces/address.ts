export interface IAddress {
  id?: string;
  name?: string;
  phone?: string;
  location?: string;
  full_address?: string;
}
export interface AddressState {
  error: string | null | undefined;
  addresses: [];
  button: boolean;
  location: [];
  activepickUpAddress: Record<string, IAddress>;
  activedestinationAddress: Record<string, IAddress>;
}

export interface PostNewAddressResponse {
  address: IAddress;
  success: boolean;
}
