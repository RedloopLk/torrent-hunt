import { FC } from 'react';
import { Card } from '../ui/card';
import Image from './image';

export const LatestMovies: FC = () => (
  <section className="space-y-4 p-10">
    <h2 className="text-2xl font-bold">Latest Movies</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <Card key={index} className="p-3">
          <Image
            src={`https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470689.jpg?t=st=1733657731~exp=1733661331~hmac=1a06d5cf7c569c4b2c59f403ba5c4dd064c84e788f38af34ebde7a334cfda992&w=1380`}
            alt={`Movie ${index + 1}`}
            width={600}
            height={400}
            cacheKey="https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470689.jpg?t=st=1733657731~exp=1733661331~hmac=1a06d5cf7c569c4b2c59f403ba5c4dd064c84e788f38af34ebde7a334cfda992&w=1380"
            className="rounded-md object-cover"
          />
          <h3 className="mt-2 font-semibold">Movie Title {index + 1}</h3>
          <p className="text-sm text-muted-foreground">2024 • Action</p>
        </Card>
      ))}
    </div>
  </section>
);
