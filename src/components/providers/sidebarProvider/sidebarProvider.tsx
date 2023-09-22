'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SidebarProviderProps {
  children: React.ReactNode;
}

interface SidebarContextProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
  isMounted: boolean;
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpen: true,
  setIsSidebarOpen: () => {},
  windowWidth: 0,
  isMounted: false,
});

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  return (
    <SidebarContext.Provider
      value={{ isSidebarOpen, setIsSidebarOpen, windowWidth, isMounted }}
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
