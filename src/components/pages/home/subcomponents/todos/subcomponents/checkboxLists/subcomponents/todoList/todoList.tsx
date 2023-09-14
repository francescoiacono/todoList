import { useTodoList } from '@/components/providers';
import { CheckboxItem } from '..';
import { NewListItemButton } from './subcomponents';

export const TodoList = () => {
  const { currentList } = useTodoList();

  return (
    <ul className='flex flex-col gap-2 flex-auto'>
      <h2>To do</h2>
      <NewListItemButton />
      {currentList?.todos.map((todo) => (
        <CheckboxItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
