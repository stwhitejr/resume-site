import {ReactNode} from 'react';

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <div className="flex-2 overflow-y-scroll md:snap-y md:snap-mandatory scroll-smooth">
      {props.children}
    </div>
  );
};

export default ScrollContainer;
