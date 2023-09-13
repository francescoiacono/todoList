import { useTodoList } from "@/components/providers";
import { ListData } from "@/types/todoTypes";
import Image from "next/image";

interface ListItemProps {
  list: ListData;
}

export const ListItem: React.FC<ListItemProps> = ({ list }) => {
  const { loadList, removeList, currentList } = useTodoList();

  const isActive = currentList?.id === list.id;

  return (
    <li
      key={list.id}
      className={`pt-2 pb-2 pl-4 pr-4 flex ${
        isActive && `bg-sky-100 rounded-xl font-bold text-sky-600`
      }`}
    >
      <button className=" text-left grow" onClick={() => loadList(list.id)}>
        {list.name}
      </button>
      <button
        onClick={() => {
          removeList(list.id);
        }}
      >
        <Image
          src="/assets/images/icons/sidebar/cross.svg"
          alt="Remove list button"
          width={20}
          height={20}
        />
      </button>
    </li>
  );
};
