import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="absolute w-full top-0 z-10 flex flex-col md:flex-row justify-between p-5 items-center bg-white">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
