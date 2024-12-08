import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Loader } from '@/components/loaders';

export default function AuthPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect({
        authorizationParams: {
          redirect_uri: window.location.origin,
        },
      });
    }
  }, [isAuthenticated, loginWithRedirect]);

  return <Loader loadingText="Redirecting to sign in... please wait" />;
}
