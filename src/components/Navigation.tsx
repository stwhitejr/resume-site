import {useContext} from 'react';
import {RouterContext} from './Router';
import {SALES_PITCH_PAGE_ID} from '@root/pages/SalesPitchPage';
import {EXPERIENCE_PAGE_ID} from '@root/pages/ExperiencePage';
import {PROJECTS_PAGE_ID} from '@root/pages/ProjectsPage';
import {CONTACT_PAGE_ID} from '@root/pages/ContactPage';

const pages = [
  {
    title: 'About Me',
    id: SALES_PITCH_PAGE_ID,
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
  const {selectedPage, setSelectedPage} = useContext(RouterContext);
  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <div
          key={page.id}
          className={`text-center ${selectedPage === page.id ? 'bg-primary text-white' : 'text-black hover:bg-primary hover:text-white cursor-pointer'} rounded-lg px-2 py-1`}
          onClick={() => setSelectedPage(page.id)}
        >
          {page.title}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
