import { useTodoList } from '@/components/providers';
import { useState } from 'react';
import { TodoData } from '@/types/todoTypes';
import { ConfirmIcon, Input } from '@/components/ui';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';

export const NewListItemButton = () => {
  const { addTodoToList } = useTodoList();

  const [isInputOpen, setIsInputOpen] = useState(false);
  const [newTodo, setNewTodo] = useState<TodoData>({
    id: uuidv4(),
    name: '',
    status: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      name: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleTodoState();

    if (error) setError('');
  };

  const handleTodoState = () => {
    setNewTodo({
      ...newTodo,
      id: uuidv4(),
    });

    if (newTodo.name === '') {
      setError('You must enter a name for the todo!');
      return;
    }

    addTodoToList(newTodo);
    setIsInputOpen(false);

    setNewTodo({
      id: uuidv4(),
      name: '',
      status: false,
    });
  };

  return (
    <>
      <div className='flex items-center border rounded-xl font-semibold'>
        <Image
          className='m-4'
          src='/assets/images/icons/sidebar/plus.svg'
          alt='Add todo icon'
          width={15}
          height={15}
        />
        {isInputOpen ? (
          <form
            onSubmit={handleSubmit}
            className='flex flex-1 text-left items-center'
          >
            <Input
              autoFocus
              className={`text-gray-500 w-full`}
              onChange={handleChange}
            />

            <button onClick={handleTodoState} type='button' className=' m-4'>
              <ConfirmIcon />
            </button>
          </form>
        ) : (
          <button
            className=' text-sm text-gray-500 flex-1 text-left py-4'
            onClick={() => setIsInputOpen(true)}
          >
            Add item
          </button>
        )}
      </div>
      {error && <p className='text-red-500 text-xs w-fit'>{error}</p>}
    </>
  );
};
