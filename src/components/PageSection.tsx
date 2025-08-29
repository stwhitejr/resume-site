import {HTMLAttributes, ReactNode, useContext, useEffect, useRef} from 'react';
import {useInView} from 'react-intersection-observer';
import {RouterContext} from './Router';

export interface PageSectionProps {
  children: ReactNode;
  id: string;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  fullBleed?: boolean;
  topBuffer?: boolean;
  bottomBuffer?: boolean;
}

const PageSection = (props: PageSectionProps) => {
  const isFirstMount = useRef(false);
  const {ref, inView} = useInView({
    threshold: 0.1,
  });

  const {setSelectedPage} = useContext(RouterContext);

  useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true;
    } else {
      if (inView) {
        const timeout = setTimeout(() => setSelectedPage(props.id), 200);

        return () => {
          clearTimeout(timeout);
        };
      }
    }
  }, [inView, props.id, setSelectedPage]);

  return (
    <section
      ref={ref}
      id={props.id}
      className={`relative min-h-screen snap-start ${props.topBuffer ? 'pt-[var(--headerBuffer--mobilePlus)] md:pt-[var(--headerBuffer--desktopPlus)]' : 'pt-[var(--headerBuffer--mobile)] md:pt-[var(--headerBuffer--desktop)]'} ${props.bottomBuffer ? 'pb-10 lg:pb-20' : ''} ${props.fullBleed ? '' : 'px-10 lg:px-20'} ${props.className}`}
    >
      {props.children}
    </section>
  );
};

export default PageSection;
