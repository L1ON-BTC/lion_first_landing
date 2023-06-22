import uniqueId from 'lodash/fp/uniqueId';
import { getAddress, GetAddressOptions, GetAddressResponse, Address } from 'sats-connect';
import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

import { GET_ADDRESS_PAYLOAD } from '@/config';

interface UserStore {
  addresses: Array<Address>;
  addAddresses: () => void;
  isConnected: boolean;
}

export const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        addresses: [],
        isConnected: false,
        addAddresses: async () => {
          const getAddressOptions: GetAddressOptions = {
            payload: GET_ADDRESS_PAYLOAD,
            onFinish: (response: GetAddressResponse) =>
              set((state: UserStore) => ({
                ...state,
                addresses: response,
                isConnected: true,
              })),
            onCancel: () => alert('Request canceled'),
          };
          await getAddress(getAddressOptions);
        },
      }),
      {
        name: uniqueId('lion-'), // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);
