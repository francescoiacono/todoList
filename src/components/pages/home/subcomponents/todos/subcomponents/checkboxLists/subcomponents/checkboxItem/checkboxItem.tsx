import { useTodoList } from '@/components/providers';
import { TodoData } from '@/types/todoTypes';
import Image from 'next/image';

interface CheckboxItemProps {
  todo: TodoData;
}

export const CheckboxItem: React.FC<CheckboxItemProps> = ({ todo }) => {
  const { setTodoStatus, removeTodoFromList } = useTodoList();

  return (
    <li className='flex gap-4 border-b px-4 py-2'>
      <input
        type='checkbox'
        checked={todo.status}
        onChange={() => setTodoStatus(todo.id)}
      />
      <p className={todo.status ? `line-through` : ''}>{todo.name}</p>

      <button
        className='ml-auto min-w-fit'
        onClick={() => {
          removeTodoFromList(todo.id);
        }}
      >
        <Image
          src='/assets/images/icons/sidebar/cross.svg'
          alt='Remove list button'
          width={15}
          height={15}
        />
      </button>
    </li>
  );
};
