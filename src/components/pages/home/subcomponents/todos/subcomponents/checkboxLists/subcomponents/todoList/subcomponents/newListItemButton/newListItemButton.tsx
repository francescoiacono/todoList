import { useTodoList } from '@/components/providers';
import { NewTodoModal } from './subcomponents';
import { useState } from 'react';
import { TodoData } from '@/types/todoTypes';
import Image from 'next/image';

export const NewListItemButton = () => {
  const { addTodoToList } = useTodoList();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className=' flex-auto border rounded-xl p-4 font-semibold'>
      <button
        className='flex items-center gap-4 text-sm text-gray-500'
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src='/assets/images/icons/sidebar/plus.svg'
          alt='Add todo icon'
          width={15}
          height={15}
        />
        Add item
      </button>

      <NewTodoModal
        isOpen={isModalOpen}
        onClose={(newTodo: TodoData) => {
          addTodoToList(newTodo);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
