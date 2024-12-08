'use client';

import { Film } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-2 sm:max-w-[80vw] mx-auto">
        <a href="/" className="flex items-center space-x-2">
          <Film className="h-6 w-6" />
          <span className="font-bold">Torrent Hunt</span>
        </a>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" asChild>
              <a href="/login">Login</a>
            </Button>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
