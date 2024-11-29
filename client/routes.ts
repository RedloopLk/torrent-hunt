import HomePage from '@/pages/home-page';
import {RouteConfig} from '@/types'


// Route Constants
export const RoutePaths = {
  HOME: '/',
  ABOUT: '/about',
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

// Route Configuration
export const routesConfig: RouteConfig[] = [
  {
    path: RoutePaths.HOME,
    title: 'Home',
    element: HomePage,
  },
];

// Utility function to convert route config to React Router format
// export const flattenRoutes = (routes: RouteConfig[]): JSX.Element[] => {
//   return routes.map((route) => {
//     if ('children' in route) {
//       return (
//         <Route key={route.path} path={route.path} element={route.element}>
//           {flattenRoutes(route.children)}
//         </Route>
//       );
//     }
//     return <Route key={route.path} path={route.path} element={<route.element />} />;
//   });
// };