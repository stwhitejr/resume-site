import {HTMLAttributes, ReactNode} from 'react';

const VARIATION_MAP = {
  title: {
    as: 'h1',
    className: 'text-4xl md:text-5xl leading-15 text-bg',
  },
  subtitle: {as: 'h2', className: 'text-3xl text-black'},
  sectiontitle: {as: 'h3', className: 'text-2xl font-semibold text-gray-800'},
  large: {as: 'p', className: 'text-lg  md:text-xl line-1 text-gray-800'},
  body: {as: 'p', className: 'text-base text-gray-700'},
  small: {as: 'p', className: 'text-sm text-gray-600'},
  caption: {as: 'span', className: 'text-xs text-neutral-500'},
} as const;

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  variation?: keyof typeof VARIATION_MAP;
  children: ReactNode;
}

const Text = ({
  variation = 'body',
  children,
  className,
  ...props
}: TextProps) => {
  const {as, ...rest} = VARIATION_MAP[variation];
  const Component = as;
  return (
    <Component className={`${rest.className} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
