import HomePage from '@/pages/home-page';
import NotFoundPage from '@/pages/not-found';
import { RouteConfig } from '@/types';
import DriveCallbackPage from './pages/drive-callback';
import SignInPage from './pages/auth-page';
import DashboardPage from './pages/dashboard-page';

export const RoutePaths = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  NOT_FOUND: '*',
  AUTH: {
    SIGNIN: '/sign-in',
  },
  CONCERTS: {
    ROOT: '/concerts',
    CITY: '/concerts/:city',
    TRENDING: '/concerts/trending',
  },
  DRIVECALLBACK: '/callback',
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
    isProtected: false,
  },
  {
    path: RoutePaths.AUTH.SIGNIN,
    title: 'Sign In',
    element: SignInPage,
    isProtected: false,
  },
  {
    path: RoutePaths.DASHBOARD,
    title: 'Sign In',
    element: DashboardPage,
    isProtected: false,
  },
  {
    path: RoutePaths.DRIVECALLBACK,
    title: 'Google Drive Access',
    element: DriveCallbackPage,
  },
];
