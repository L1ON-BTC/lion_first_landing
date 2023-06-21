import { useRoutes } from 'react-router-dom';

import { ComingSoon } from '@/features/misc';

import { publicRoutes } from './public';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <ComingSoon /> }];

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return <>{element}</>;
};
