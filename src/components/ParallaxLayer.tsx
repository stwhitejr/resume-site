import {HTMLAttributes, ReactNode} from 'react';
import {motion} from 'motion/react';
import {useInView} from 'react-intersection-observer';

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
  const {} = useInView();
  const translateKey = translate === 'y' ? 'translateY' : 'translateX';
  return (
    <motion.div
      initial={{
        opacity: 0,
        [translateKey]: moveFrom === 'left-top' ? '-100px' : '100px',
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
