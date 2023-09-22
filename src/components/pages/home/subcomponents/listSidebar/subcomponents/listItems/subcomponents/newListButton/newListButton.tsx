import { useState } from 'react';
import { NewListModal } from './subcomponents';
import { PlusIcon } from '@/components/ui';

export const NewListButton = () => {
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
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
