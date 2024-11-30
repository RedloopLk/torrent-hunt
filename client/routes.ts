// routes.ts
import HomePage from '@/pages/home-page';
import NotFoundPage from '@/pages/not-found';
import { RouteConfig } from '@/types';

export const RoutePaths = {
  HOME: '/',
  ABOUT: '/about',
  NOT_FOUND: '*',
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
  },
  CONCERTS: {
    ROOT: '/concerts',
    CITY: '/concerts/:city',
    TRENDING: '/concerts/trending',
  },
} as const;

export const routesConfig: RouteConfig[] = [
  {
    path: RoutePaths.HOME,
    title: 'Home',
    element: HomePage,
    isProtected: true,
  },
  {
    path: RoutePaths.NOT_FOUND,
    title: 'Not Found',
    element: NotFoundPage,
  }
];