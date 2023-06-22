import { GetAddressPayload, AddressPurposes } from 'sats-connect';

export const GET_ADDRESS_PAYLOAD: GetAddressPayload = {
  purposes: Object.values(AddressPurposes),
  message: 'Address for receiving Ordinals and payments',
  network: {
    type: 'Mainnet',
  },
};
