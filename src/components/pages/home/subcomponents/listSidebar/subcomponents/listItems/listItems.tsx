import { ListData } from "@/types/todoTypes";
import { useTodoList } from "@/components/providers";
import { ListItem } from "./subcomponents";

export const ListItems = () => {
  const { lists } = useTodoList();

  return (
    <ul className="p-2">
      {lists.length === 0 ? (
        <li>Create your first todo task list!</li>
      ) : (
        lists.map((list: ListData) => <ListItem list={list} key={list.id} />)
      )}
    </ul>
  );
};
