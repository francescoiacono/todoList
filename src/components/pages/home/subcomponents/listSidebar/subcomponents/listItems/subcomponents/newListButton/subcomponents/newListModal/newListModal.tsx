'use client';

import { useTodoList } from '@/components/providers';
import { Button, Modal, InputWithBorder } from '@/components/ui';
import { ListData } from '@/types/todoTypes';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface NewListModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const NewListModal: React.FC<NewListModalProps> = ({
  isOpen,
  closeModal,
}) => {
  const { addList } = useTodoList();

  const [newList, setNewList] = useState<ListData>({
    id: '',
    name: '',
    todos: [],
    completedTodos: [],
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList({
      ...newList,
      id: uuidv4(),
      name: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleStateUpdate();
    if (error) setError('');
  };

  const handleStateUpdate = () => {
    if (newList.name === '') {
      setError('You must enter a name for the list!');
      return;
    }

    addList(newList);
    closeModal();
    setNewList({
      id: uuidv4(),
      name: '',
      todos: [],
      completedTodos: [],
    });
  };

  return (
    <Modal closeModal={closeModal} title='New List' isOpen={isOpen}>
      <form onSubmit={handleSubmit} className='flex gap-2'>
        <InputWithBorder autoFocus type='text' onChange={handleChange} />
        <Button type='submit'>Add</Button>
      </form>
      <p className='mt-2 text-red-500'>{error}</p>
    </Modal>
  );
};
