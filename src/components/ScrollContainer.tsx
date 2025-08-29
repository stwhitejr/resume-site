import {ReactNode} from 'react';

export interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer = (props: ScrollContainerProps) => {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {props.children}
    </div>
  );
};

export default ScrollContainer;
