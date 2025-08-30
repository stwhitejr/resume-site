import {ScrollContext} from '@root/context/ScrollContext';
import {ReactNode, useContext, useEffect, useRef} from 'react';

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  const scrollTop = useRef(0);
  const updateWindowIsOpen = useRef(false);
  const {scrollDirection, setScrollDirection} = useContext(ScrollContext);
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
  }, [scrollDirection]);

  useEffect(() => {
    const scrollEvent = (e) => {
      if (updateWindowIsOpen.current) {
        if (e.srcElement.scrollTop > scrollTop.current) {
          setScrollDirection('down');
        } else if (e.srcElement.scrollTop < scrollTop.current) {
          setScrollDirection('up');
        } else {
          setScrollDirection(null);
        }
      }
      scrollTop.current = e.srcElement.scrollTop;
    };

    const element = ref.current;
    element.addEventListener('scroll', scrollEvent);
    return () => {
      element.removeEventListener('scroll', scrollEvent);
    };
  }, []);

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
