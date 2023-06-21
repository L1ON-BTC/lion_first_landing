//import { lazyImport } from '@/utils/lazyImport';
//const { AuthRoutes } = lazyImport(() => import('@/features/auth'), 'AuthRoutes');

export const publicRoutes = [
  { path: '/about', element: <div>about</div> },
  { path: '/faq', element: <div>faq</div> },
  { path: '/project/*', element: <div>project</div> },
  { path: '/profile', element: <div>profiles</div> },
];
