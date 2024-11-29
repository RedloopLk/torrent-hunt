import { RouteConfig } from '@/types';
import { ReactNode } from 'react'
import {Route} from 'react-router'

export const flattenRoutes = (routes: RouteConfig[]): JSX.Element[] => {
    return routes.map((route) => {
      if ('children' in route) {
        return (
          <Route key={route.path} path={route.path} element={route.element as ReactNode}>
            {flattenRoutes(route.children)}
          </Route>
        );
      }
      return <Route key={route.path} path={route.path} element={<route.element />} />;
    });
  };
