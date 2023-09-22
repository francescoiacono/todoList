'use client';

import { ListItems } from './subcomponents';
import { useSidebar } from '@/components/providers';
import { LeftArrowIcon } from '@/components/ui';
import classnames from 'classnames';

export const ListSidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen, windowWidth, isMounted } =
    useSidebar();

  if (!isMounted)
    return (
      <div className='animate-pulse h-[calc(100vh-2rem)] w-[18rem] bg-slate-100'></div>
    );

  const sidebarClass = classnames(
    'bg-slate-100 px-4 py-2 text-sm overflow-hidden transition-all ease-in-out duration-300 top-0 left-0 z-10',
    {
      'm-4 h-[calc(100vh-2rem)] w-[18rem] rounded-lg': windowWidth > 768,
      'absolute top-0 left-0 w-full h-full bg-slate-100 z-10':
        windowWidth <= 768,
      'translate-x-0': isSidebarOpen,
      'absolute -translate-x-[110%]': !isSidebarOpen,
    }
  );

  return (
    <div className={sidebarClass}>
      <div className='flex items-center'>
        <label className='flex-auto text-lg font-semibold'>Menu</label>
        <button onClick={() => setIsSidebarOpen(false)}>
          <LeftArrowIcon />
        </button>
      </div>
      <ListItems />
    </div>
  );
};
