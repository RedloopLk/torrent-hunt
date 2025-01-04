import { FileManager } from '@/components/common/file-manager';
import { MagnetInput } from '@/components/common/magnet-input';
import { MovieGrid } from '@/components/common/movie-grid';
// import { MovieSlider } from '@/components/common/movie-slider';
import { User } from '@auth0/auth0-react';
import { FC } from 'react';

const DashboardPage: FC<User> = () => {
  return (
    <div className="mx-auto space-y-8 py-6 max-w-xs md:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <h1 className="text-3xl font-bold">Movie Dashboard</h1>

      <MagnetInput />

      <FileManager />

      <MovieGrid title="Latest Movies" />

      {/* <MovieSlider title="Suggested Movies" /> */}
    </div>
  );
};

export default DashboardPage;
