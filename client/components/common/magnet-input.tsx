'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Magnet } from 'lucide-react';

export function MagnetInput() {
  const [magnetLink, setMagnetLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement magnet link processing
    console.log('Processing magnet link:', magnetLink);
    setMagnetLink('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <h2 className="text-2xl font-semibold">Add Torrent</h2>
      <div className="flex gap-2">
        <Input
          value={magnetLink}
          onChange={(e) => setMagnetLink(e.target.value)}
          placeholder="Paste magnet link here..."
          className="flex-grow"
        />
        <Button type="submit">
          <Magnet className="mr-2 h-4 w-4" />
          Add Torrent
        </Button>
      </div>
    </form>
  );
}
