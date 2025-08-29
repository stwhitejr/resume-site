import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 items-center bg-white md:px-20">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
