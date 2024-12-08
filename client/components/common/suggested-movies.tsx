import { FC } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from './image';
import { Card } from '../ui/card';
import { useMediaQuery } from 'react-responsive';

export const SuggestedMovies: FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className="space-y-4 p-5">
      <h2 className="text-2xl font-bold">Suggested Movies</h2>
      <Carousel className="mx-auto w-full max-w-[90vw]">
        <CarouselContent>
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/3 lg:basis-1/5 xl:basis-1/6"
            >
              <Card className="p-3">
                <Image
                  src={`https://th.bing.com/th/id/R.224a958f47e45ff8f8549d97d6442f14?rik=stiGq5cULqbbAA&pid=ImgRaw&r=0`}
                  alt={`Movie ${index + 1}`}
                  width={600}
                  cacheKey="https://th.bing.com/th/id/R.224a958f47e45ff8f8549d97d6442f14?rik=stiGq5cULqbbAA&pid=ImgRaw&r=0"
                  height={400}
                  className="rounded-md object-cover"
                />
                <h3 className="mt-2 font-semibold">Movie Title {index + 1}</h3>
                <p className="text-sm text-muted-foreground">2024 • Action</p>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {isDesktop && (
          <>
            <CarouselPrevious />
            <CarouselNext />
          </>
        )}
      </Carousel>
    </section>
  );
};
