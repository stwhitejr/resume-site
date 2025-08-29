import {createContext, ReactNode, useEffect, useState} from 'react';

export const RouterContext = createContext<{
  selectedPage: string;
  setSelectedPage?: (arg: string) => void;
}>({selectedPage: ''});

export interface RouterProps {
  children: ReactNode;
}

const getLocationHash = () => window.location.hash.replace('#', '');

const Router = (props: RouterProps) => {
  const [selectedPage, setSelectedPage] = useState(getLocationHash());

  useEffect(() => {
    const currentHash = getLocationHash();

    if (currentHash !== selectedPage) {
      window.history.pushState(null, '', `#${selectedPage}`);
    }
  }, [selectedPage]);
  return (
    <RouterContext.Provider value={{selectedPage, setSelectedPage}}>
      {props.children}
    </RouterContext.Provider>
  );
};

export default Router;
