import React, { ReactElement, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { RoutePaths } from '@/routes';
import { Loader } from '../loaders';

interface AuthGuardProps {
  children: ReactElement;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const { isAuthenticated, isLoading, user } = useAuth0();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate(RoutePaths.AUTH.SIGNIN, {
        state: { returnUrl: location.pathname },
      });
    }
  }, [isAuthenticated, isLoading, navigate, location]);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/sign-in" replace />;
  }

  return React.cloneElement(children, { ...user });
}
