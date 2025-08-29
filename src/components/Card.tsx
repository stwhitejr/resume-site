import {ReactNode} from 'react';

export interface CardProps {
  children: ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <div className="rounded-2xl bg-white/5 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur">
      {props.children}
    </div>
  );
};

export default Card;
