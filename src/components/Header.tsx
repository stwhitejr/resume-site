import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="fixed top-0 md:static z-10 w-full flex flex-col md:flex-row justify-between p-4 items-center bg-white md:px-20">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
