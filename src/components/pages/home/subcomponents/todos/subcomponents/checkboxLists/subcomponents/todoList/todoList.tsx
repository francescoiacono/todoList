import { useTodoList } from '@/components/providers';
import { CheckboxItem } from '..';
import { NewListItemButton } from './subcomponents';

export const TodoList = () => {
  const { currentList } = useTodoList();

  return (
    <ul className='flex flex-col gap-2 flex-auto'>
      <NewListItemButton />
      {currentList && currentList.todos.length > 0 ? (
        currentList.todos.map((todo) => (
          <CheckboxItem todo={todo} key={todo.id} />
        ))
      ) : (
        <p className='text-gray-500'>Nothing to do here!</p>
      )}
    </ul>
  );
};
