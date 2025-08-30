import {createContext, ReactNode, useState} from 'react';

export type ScrollDirection = null | 'up' | 'down';

export const ScrollContext = createContext<{
  shouldHideHeader: boolean;
  setShouldHideHeader?: (arg: boolean) => void;
}>({
  shouldHideHeader: false,
});

export const ScrollContextProvider = ({children}: {children: ReactNode}) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

  return (
    <ScrollContext.Provider value={{shouldHideHeader, setShouldHideHeader}}>
      {children}
    </ScrollContext.Provider>
  );
};
