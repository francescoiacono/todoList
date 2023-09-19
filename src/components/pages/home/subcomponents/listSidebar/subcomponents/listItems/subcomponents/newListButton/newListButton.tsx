import { useTodoList } from '@/components/providers';
import { useState } from 'react';
import { NewListModal } from './subcomponents';
import { ListData } from '@/types/todoTypes';
import { PlusIcon } from '@/components/ui';

export const NewListButton = () => {
  const { addList } = useTodoList();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='p-2 flex-grow-1 w-full'>
      <button
        className='flex items-center gap-2 text-sm text-gray-500'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <PlusIcon />
        New list
      </button>

      <NewListModal
        isOpen={isModalOpen}
        onClose={(newList: ListData) => {
          addList(newList);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
