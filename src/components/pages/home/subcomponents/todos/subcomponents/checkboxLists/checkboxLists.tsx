'use client';

import { useSidebar, useTodoList } from '@/components/providers';
import { TodoList, CompletedList } from './subcomponents';
import { NewListButton } from '../../../listSidebar/subcomponents/listItems/subcomponents';
import { BurgerIcon } from '@/components/ui';

export const CheckboxLists = () => {
  const { currentList } = useTodoList();
  const { isSidebarOpen, setIsSidebarOpen, isMounted } = useSidebar();

  return (
    <div className='p-4 flex-auto'>
      {currentList ? (
        <>
          <div className='pb-2 flex gap-4'>
            {!isSidebarOpen && (
              <button onClick={() => setIsSidebarOpen(true)}>
                <BurgerIcon />
              </button>
            )}
            <h1>{currentList?.name}</h1>
          </div>
          <div className='flex flex-col gap-20 p-4'>
            <TodoList />
            <CompletedList />
          </div>
        </>
      ) : (
        <>
          {!isMounted && <p className='italic text-sm'>Loading...</p>}
          {!isSidebarOpen && !currentList && isMounted && (
            <button onClick={() => setIsSidebarOpen(true)}>
              <BurgerIcon />
            </button>
          )}
          <p className='py-3 text-gray-500 italic text-sm'>
            Create a new list!
          </p>
          <NewListButton />
        </>
      )}
    </div>
  );
};
