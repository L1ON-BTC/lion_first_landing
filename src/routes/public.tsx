import { lazyImport } from '@/utils/lazyImport';
const { ProjectsRoutes } = lazyImport(
  () => import('@/features/projects'),
  'ProjectsRoutes',
);

export const publicRoutes = [
  { path: '/about', element: <div>about</div> },
  { path: '/faq', element: <div>faq</div> },
  { path: '/projects/*', element: <ProjectsRoutes /> },
  { path: '/profile', element: <div>profiles</div> },
];
