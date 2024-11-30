import { Button } from '@/components/ui/button';
import { config } from '@/config';
import { useAuth0 } from '@auth0/auth0-react';

export default function HomePage() {
  const { loginWithRedirect, logout, user } = useAuth0();

  return (
    <div>
      <p>home page</p>
      <p>user : {user?.name}</p>
      <p>env : {config.AUTH0_DOMAIN}</p>
      <Button onClick={async () => await loginWithRedirect()}>Login</Button>
      <Button onClick={async () => await logout()} variant={'destructive'}>
        Logout
      </Button>
    </div>
  );
}
