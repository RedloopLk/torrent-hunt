import Image from '@/components/common/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FC, PropsWithChildren } from 'react';

export const HeroSection: FC = () => (
  <Wrapper>
    <section className=" bg-gradient-custom/60 backdrop-blur-md m-auto w-full p-8 text-white">
      <div className="mx-auto w-full space-y-4 text-center sm:max-w-2xl">
        <h1 className="text-4xl font-bold">Find Your Favorite Movies</h1>
        <p className="text-lg opacity-90">
          Paste your magnet link below to start downloading
        </p>
        <div className="flex gap-2">
          <Input
            placeholder="Paste magnet link here..."
            className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
          />
          <Button variant="secondary">Download</Button>
        </div>
      </div>
    </section>
  </Wrapper>
);

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative w-full aspect-[3/1] flex flex-col justify-end">
      <Image
        src={`https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470689.jpg?t=st=1733657731~exp=1733661331~hmac=1a06d5cf7c569c4b2c59f403ba5c4dd064c84e788f38af34ebde7a334cfda992&w=1380`}
        alt={`Movie`}
        width={600}
        height={400}
        cacheKey="https://img.freepik.com/free-photo/fantasy-group-adventurers_23-2151470689.jpg?t=st=1733657731~exp=1733661331~hmac=1a06d5cf7c569c4b2c59f403ba5c4dd064c84e788f38af34ebde7a334cfda992&w=1380"
        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
      />
      <div className='z-0 relative'>{children}</div>
    </div>
  );
};
