import {createContext, ReactNode, useState} from 'react';

export type ScrollDirection = null | 'up' | 'down';

export const ScrollContext = createContext<{
  scrollDirection: ScrollDirection;
  setScrollDirection?: (arg: ScrollDirection) => void;
}>({
  scrollDirection: null,
});

export const ScrollContextProvider = ({children}: {children: ReactNode}) => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  return (
    <ScrollContext.Provider value={{scrollDirection, setScrollDirection}}>
      {children}
    </ScrollContext.Provider>
  );
};
