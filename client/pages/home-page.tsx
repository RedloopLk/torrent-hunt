import Body from '@/components/homepage/body';
import Navbar from '@/components/Navbar/Navbar';
import { User } from '@auth0/auth0-react';
import { FC } from 'react';

const HomePage: FC<User> = ({ name }) => {
  return (
    <div>
      <Navbar/>
      <Body/>
    </div>
  );
};

export default HomePage;
