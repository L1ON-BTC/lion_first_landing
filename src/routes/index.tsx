import { useRoutes } from 'react-router-dom';

import { ComingSoon } from '@/features/misc';

export const AppRoutes = () => {
  const commonRoutes = [{ path: '/', element: <ComingSoon /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
