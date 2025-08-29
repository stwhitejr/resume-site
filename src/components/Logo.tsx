import {useContext} from 'react';
import {RouterContext} from './Router';
import {INTRO_PAGE_ID} from '@root/pages/IntroPage';

const Logo = () => {
  const {setSelectedPage} = useContext(RouterContext);
  return (
    <div
      className="tracking-widest text-primary uppercase text-2xl cursor-pointer mb-2 md:mb-0"
      onClick={() => setSelectedPage(INTRO_PAGE_ID)}
    >
      Steve White
    </div>
  );
};

export default Logo;
