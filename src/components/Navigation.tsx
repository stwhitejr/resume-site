import {useContext} from 'react';
import {RouterContext} from './Router';
import {ABOUT_PAGE_ID} from '@root/pages/AboutPage';
import {EXPERIENCE_PAGE_ID} from '@root/pages/ExperiencePage';
import {PROJECTS_PAGE_ID} from '@root/pages/ProjectsPage';
import {CONTACT_PAGE_ID} from '@root/pages/ContactPage';

const pages = [
  {
    title: 'About Me',
    id: ABOUT_PAGE_ID,
  },
  {
    title: 'Experience & Skills',
    id: EXPERIENCE_PAGE_ID,
  },
  {
    title: 'Projects',
    id: PROJECTS_PAGE_ID,
  },
  {
    title: 'Contact',
    id: CONTACT_PAGE_ID,
  },
];

const Navigation = () => {
  const {selectedPage} = useContext(RouterContext);
  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <a
          href={`/#${page.id}`}
          key={page.id}
          className={`text-center text-xs ${selectedPage === page.id ? 'bg-primary text-white' : 'text-black hover:bg-primary hover:text-white cursor-pointer'} rounded-lg px-2 py-1`}
        >
          {page.title}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
