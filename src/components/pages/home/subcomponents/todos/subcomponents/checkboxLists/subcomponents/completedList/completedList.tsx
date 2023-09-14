import { useTodoList } from '@/components/providers';
import { CheckboxItem } from '..';

export const CompletedList = () => {
  const { currentList } = useTodoList();

  return (
    <div className='flex flex-col gap-2'>
      <h2>Completed</h2>
      <ul>
        {currentList?.completedTodos.map((todo) => (
          <CheckboxItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};
