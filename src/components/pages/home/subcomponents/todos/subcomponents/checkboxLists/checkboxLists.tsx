import { useTodoList } from "@/components/providers";
import { TodoList, CompletedList } from "./subcomponents";

export const CheckboxLists = () => {
  const { currentList } = useTodoList();
  return (
    <div>
      <h1>{currentList?.name}</h1>
      <div>
        <TodoList />
        <CompletedList />
      </div>
    </div>
  );
};
