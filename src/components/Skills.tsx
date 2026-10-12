import {ReactNode} from 'react';
import Text from './Text';

const skills = [
  'Typescript',
  'React',
  'Node.js',
  'Redux',
  'RTK Query',
  'Apollo',
  'GraphQL',
  'SASS',
  'Tailwind',
  'REST',
  'PHP',
  'Git',
  'Webpack',
  'Adobe',
];

const Pill = ({children}: {children: ReactNode}) => (
  <Text variation="caption" className="px-4 py-2 bg-white rounded-3xl">
    {children}
  </Text>
);
const Skills = () => {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      {skills.map((skill) => (
        <Pill key={skill}>{skill}</Pill>
      ))}
    </div>
  );
};

export default Skills;
