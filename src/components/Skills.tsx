import {ReactNode} from 'react';
import Text from './Text';

const skills = [
  'Typescript',
  'React',
  'Redux',
  'RTK Query',
  'SASS',
  'Tailwind',
  'Jest',
  'Cypress',
  'Playwright',
  'REST',
  'GraphQL',
  'Git',
  'Docker',
  'Webpack',
  'Storybook',
  'Adobe',
  'Figma',
];

const Pill = ({children}: {children: ReactNode}) => (
  <Text variation="caption" className="px-4 py-2 bg-white rounded-3xl">
    {children}
  </Text>
);
const Skills = () => {
  return (
    <div className="flex gap-2 items-center justify-center md:justify-end  flex-wrap">
      {skills.map((skill) => (
        <Pill key={skill}>{skill}</Pill>
      ))}
    </div>
  );
};

export default Skills;
