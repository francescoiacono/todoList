import { useTodoList } from '@/components/providers';
import { CheckboxItem } from '..';

export const CompletedList = () => {
  const { currentList } = useTodoList();

  return (
    <div className='flex flex-col gap-2'>
      <h2>Completed</h2>
      <ul>
        {currentList && currentList.completedTodos.length > 0 ? (
          currentList.completedTodos.map((todo) => (
            <CheckboxItem todo={todo} key={todo.id} />
          ))
        ) : (
          <p className='text-gray-500'>{`Let's complete some tasks!`}</p>
        )}
      </ul>
    </div>
  );
};
