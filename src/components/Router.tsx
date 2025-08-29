import {createContext, ReactNode, useEffect, useRef, useState} from 'react';

export const RouterContext = createContext<{
  selectedPage: string;
  setSelectedPage?: (arg: string) => void;
}>({selectedPage: ''});

export interface RouterProps {
  children: ReactNode;
}

const getLocationHash = () => window.location.hash.replace('#', '');

const Router = (props: RouterProps) => {
  const isFirstMount = useRef(false);
  const [selectedPage, setSelectedPage] = useState(getLocationHash());

  useEffect(() => {
    if (!isFirstMount.current) {
      isFirstMount.current = true;
      const section =
        selectedPage && document.querySelector(`#${selectedPage}`);
      if (section) {
        section.scrollIntoView();
      }
    } else {
      const timeout = setTimeout(() => {
        const currentHash = getLocationHash();

        if (currentHash !== selectedPage) {
          window.history.pushState(null, '', `#${selectedPage}`);
        }
      }, 500);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [selectedPage]);
  return (
    <RouterContext.Provider value={{selectedPage, setSelectedPage}}>
      {props.children}
    </RouterContext.Provider>
  );
};

export default Router;
