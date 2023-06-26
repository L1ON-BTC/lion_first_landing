import ioClient from 'socket.io-client';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';

import { IOCLIENT } from '@/config';

/*
 The initial state shapes what values we can have in our store.
 We can order them as we like or use multiple stores.
 For our game, I'll use only one store.

 Our server only sends the game state updates so that's almost all we need.
 We use the 'ready' state to know if we are connected to the server or not.
*/
const initialState = {
  projects: [],
  project: {},
  ready: false,
};

/*
 Here we have access to two functions that
 let us mutate or get data from our state.

 This is where the magic happens, we can fully hide
 the WebSocket implementation here and then use our store anywhere in our app!
 */
const mutations = (setState: any, getState: any) => {
  const socket = ioClient(IOCLIENT);

  // this is enough to connect all our server events
  // to our state managment system!
  socket
    .on('connect', () => {
      setState({ ready: true });
    })
    .on('disconnect', () => {
      setState({ ready: false });
    })
    .on('getProject.answer', (data) => {
      setState({ project: data });
    })
    .on('getProjects.answer', (data) => {
      setState({ projects: data });
    });

  return {
    actions: {
      getProject({ projectId }: any) {
        socket.emit('getProject', projectId);
      },
      getProjects({ page, limit }: any) {
        socket.emit('getProjects', { page, limit });
      },
    },
  };
};

//We created our first store!
export const useProjectsStore = create(combine(initialState, mutations));
