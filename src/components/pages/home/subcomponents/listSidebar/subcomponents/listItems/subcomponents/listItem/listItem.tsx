import { useTodoList } from "@/components/providers";
import { ListData } from "@/types/todoTypes";

interface ListItemProps {
  list: ListData;
}

export const ListItem: React.FC<ListItemProps> = ({ list }) => {
  const { loadList, removeList } = useTodoList();

  return (
    <li key={list.id} className="flex gap-2">
      <button onClick={() => loadList(list.id)}>{list.name}</button>
      <button
        onClick={() => {
          removeList(list.id);
        }}
      >
        X
      </button>
    </li>
  );
};
