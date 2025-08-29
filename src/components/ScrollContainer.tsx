import {ReactNode} from 'react';

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <div className="flex-2 overflow-y-scroll snap-y snap-proximity lg:snap-mandatory scroll-smooth">
      {props.children}
    </div>
  );
};

export default ScrollContainer;
