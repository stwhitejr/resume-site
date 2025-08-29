import {INTRO_PAGE_ID} from '@root/pages/IntroPage';

const Logo = () => {
  return (
    <a
      href={`/#${INTRO_PAGE_ID}`}
      className="tracking-widest text-primary uppercase text-sm cursor-pointer mb-2 md:mb-0 "
    >
      Steve White
    </a>
  );
};

export default Logo;
