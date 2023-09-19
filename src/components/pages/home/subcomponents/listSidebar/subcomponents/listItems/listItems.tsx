import { ListData } from '@/types/todoTypes';
import { useTodoList } from '@/components/providers';
import { ListItem, NewListButton } from './subcomponents';

export const ListItems = () => {
  const { lists } = useTodoList();

  return (
    <ul className='mt-2 flex flex-col gap-2'>
      {lists.map((list: ListData) => (
        <ListItem list={list} key={list.id} />
      ))}
      <NewListButton />
    </ul>
  );
};
