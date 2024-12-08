import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { config } from '@/config';
import { ThemeProvider } from '@/providers/theme-provider';
import { Auth0Provider } from '@auth0/auth0-react';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Auth0Provider
      domain={config.AUTH0_DOMAIN}
      clientId={config.AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: config.AUTH0_IDENTIFIER,
        scope:
          'openid profile email https://www.googleapis.com/auth/drive.file',
      }}
    >
      <ThemeProvider defaultTheme="light" storageKey="theme">
        <div className="flex min-h-screen flex-col bg-background">
          <Header />
          <main className="mx-auto flex-1">{children}</main>
          <Footer />
        </div>
      </ThemeProvider>
    </Auth0Provider>
  );
}
