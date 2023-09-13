import { useTodoList } from "@/components/providers";
import { CheckboxItem } from "..";

export const CompletedList = () => {
  const { currentList } = useTodoList();

  return (
    <div>
      <h2>Completed List</h2>
      {currentList?.completedTodos.map((todo) => (
        <CheckboxItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};
