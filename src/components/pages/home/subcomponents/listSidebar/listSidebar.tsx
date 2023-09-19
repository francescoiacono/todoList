'use client';
import { ListItems } from './subcomponents';

export const ListSidebar = () => {
  return (
    <div className=' bg-slate-100 m-4 h-[calc(100vh-2rem)] px-3 py-2 text-sm overflow-hidden w-72 rounded-lg '>
      <label className='text-lg font-semibold'>Menu</label>
      <ListItems />
    </div>
  );
};
