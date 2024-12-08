import { LatestMovies } from '@/components/common/latest-movies';
import { SuggestedMovies } from '@/components/common/suggested-movies';
import { HeroSection } from '@/components/pages/home/hero-section';
import { Button } from '@/components/ui/button';
import { useAuth0, User } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';

const HomePage: FC<User> = () => {
  const { getAccessTokenSilently, logout } = useAuth0();

  useEffect(() => {
    async function fetchAccessToken() {
      try {
        const token = await getAccessTokenSilently();
        console.log(token);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAccessToken();
  }, []);

  return (
    <div className="space-y-8">
      {/* Hero Section with Magnet Input */}
      <Button onClick={() => logout()}>LOGOUT</Button>
      <HeroSection />

      {/* Suggested Movies Slider */}
      <SuggestedMovies />

      {/* Latest Movies Grid */}
      <LatestMovies />
    </div>
  );
};

export default HomePage;
