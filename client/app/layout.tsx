import { ModeToggle } from '@/components/common/theme-toggle';
import { ThemeProvider } from '@/providers/theme-provider';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <ModeToggle />
        {children}
      </ThemeProvider>
    </main>
  );
}
