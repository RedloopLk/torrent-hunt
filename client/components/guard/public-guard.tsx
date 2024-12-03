import { PropsWithChildren } from 'react';

export function PublicGuard({ children }: PropsWithChildren) {
  return <>{children}</>;
}
