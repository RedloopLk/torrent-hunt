import { User } from '@auth0/auth0-react';
import { FC } from 'react';

const HomePage: FC<User> = ({ name }) => {
  return (
    <div>
      <h1>Hey , {name}</h1>
    </div>
  );
};

export default HomePage;
