import { LatestMovies } from '@/components/common/latest-movies';
import { SuggestedMovies } from '@/components/common/suggested-movies';
import { HeroSection } from '@/components/pages/home/hero-section';
import { User } from '@auth0/auth0-react';
import { FC } from 'react';

const HomePage: FC<User> = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section with Magnet Input */}
      <HeroSection />

      {/* Suggested Movies Slider */}
      <SuggestedMovies />

      {/* Latest Movies Grid */}
      <LatestMovies />
    </div>
  );
};

export default HomePage;
