import {HTMLAttributes, ReactNode} from 'react';
import {motion} from 'motion/react';

export interface ParallaxProps {
  translate?: 'y' | 'x';
  moveFrom?: 'left-top' | 'right-bottom';
}

export interface ParallaxLayerProps extends ParallaxProps {
  children: ReactNode;
  className?: HTMLAttributes<HTMLDivElement>['className'];
}

const ParallaxLayer = ({
  children,
  translate = 'y',
  moveFrom = 'right-bottom',
  className,
}: ParallaxLayerProps) => {
  const translateKey = translate === 'y' ? 'translateY' : 'translateX';
  return (
    <motion.div
      initial={{
        opacity: 0.2,
        [translateKey]: moveFrom === 'left-top' ? '-50px' : '50px',
      }}
      // @ts-expect-error dynamic
      whileInView={{
        opacity: 1,
        [translateKey]: '0px',
        transition: {type: 'spring', stiffness: 50},
      }}
      viewport={{once: true, amount: 0.01}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxLayer;
