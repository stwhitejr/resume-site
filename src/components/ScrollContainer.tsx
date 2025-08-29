import {ReactNode} from 'react';

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <div className="flex-2 md:overflow-y-scroll md:snap-y md:snap-mandatory md:scroll-smooth">
      {props.children}
    </div>
  );
};

export default ScrollContainer;
