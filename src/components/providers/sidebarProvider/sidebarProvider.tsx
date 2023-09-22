'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SidebarProviderProps {
  children: React.ReactNode;
}

interface SidebarContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
  windowWidth: 0,
});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    setWindowWidth(window.innerWidth);

    if (windowWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [windowWidth]);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, windowWidth }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
