import { GetAddressPayload } from 'sats-connect';

export const GET_ADDRESS_PAYLOAD: GetAddressPayload = {
  purposes: ['ordinals', 'payment'],
  message: 'Address for receiving Ordinals and payments',
  network: {
    type: 'Mainnet',
  },
};
