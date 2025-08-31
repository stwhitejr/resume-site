import {ScrollContext} from '@root/context/ScrollContext';
import {ReactNode, useContext, useEffect, useRef} from 'react';

const TOP_PAGE_BUFFER = 10;
const BOTTOM_PAGE_BUFFER = 200;

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  const scrollTop = useRef(0);
  const updateWindowIsOpen = useRef(false);
  const {shouldHideHeader, setShouldHideHeader} = useContext(ScrollContext);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newValue = !updateWindowIsOpen.current;
    updateWindowIsOpen.current = newValue;
    if (!newValue) {
      const timeout = setTimeout(() => {
        updateWindowIsOpen.current = true;
      }, 1000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [shouldHideHeader]);

  useEffect(() => {
    const scrollEvent = (e) => {
      // Always show at top
      console.dir(e.srcElement.offsetHeight);
      if (
        shouldHideHeader &&
        (e.srcElement.scrollTop <= TOP_PAGE_BUFFER ||
          e.srcElement.scrollTop >=
            e.srcElement.scrollHeight -
              (e.srcElement.offsetHeight + BOTTOM_PAGE_BUFFER))
      ) {
        setShouldHideHeader(false);
      } else {
        if (updateWindowIsOpen.current) {
          // Going down
          if (
            e.srcElement.scrollTop > scrollTop.current &&
            e.srcElement.scrollTop > TOP_PAGE_BUFFER
          ) {
            setShouldHideHeader(true);
          } else if (e.srcElement.scrollTop < scrollTop.current) {
            setShouldHideHeader(false);
          } else {
            setShouldHideHeader(false);
          }
        }
      }
      scrollTop.current = e.srcElement.scrollTop;
    };

    const element = ref.current;
    element.addEventListener('scroll', scrollEvent);
    return () => {
      element.removeEventListener('scroll', scrollEvent);
    };
  }, [shouldHideHeader]);

  return (
    <div
      ref={ref}
      className={`flex-2 overflow-y-scroll h-full md:snap-y md:snap-mandatory scroll-smooth`}
    >
      {props.children}
    </div>
  );
};

export default ScrollContainer;
