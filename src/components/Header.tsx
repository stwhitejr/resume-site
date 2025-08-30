import {useContext} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import {ScrollContext} from '../context/ScrollContext';

const Header = () => {
  const {scrollDirection} = useContext(ScrollContext);

  return (
    <div
      className={`w-full absolute top-0 z-10 transition duration-300 ${scrollDirection === 'down' ? 'translate-y-[-100%] ' : ''} flex flex-col md:flex-row justify-between p-4 items-center bg-white md:px-20`}
    >
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
