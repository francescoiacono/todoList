import { useTodoList } from "@/components/providers";
import { CheckboxItem } from "..";
import { NewListItemButton } from "./subcomponents";

export const TodoList = () => {
  const { currentList } = useTodoList();

  return (
    <ul>
      <h2>Todo</h2>
      {currentList?.todos.map((todo) => (
        <CheckboxItem todo={todo} key={todo.id} />
      ))}
      <NewListItemButton />
    </ul>
  );
};
