'use client';

import { useTodoList } from '@/components/providers';
import { TodoList, CompletedList } from './subcomponents';

export const CheckboxLists = () => {
  const { currentList } = useTodoList();

  return (
    <div className='p-4 flex-auto'>
      {currentList ? (
        <>
          <h1 className='pb-2'>{currentList?.name}</h1>
          <div className='flex flex-col gap-20 p-4'>
            <TodoList />
            <CompletedList />
          </div>
        </>
      ) : (
        <p className='pb-4 text-gray-500 italic text-sm'>Waiting for list...</p>
      )}
    </div>
  );
};
