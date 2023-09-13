import { useTodoList } from "@/components/providers";
import { NewTodoModal } from "./subcomponents";
import { useState } from "react";
import { TodoData } from "@/types/todoTypes";

export const NewListItemButton = () => {
  const { addTodoToList } = useTodoList();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>+ Add item</button>
      <NewTodoModal
        isOpen={isModalOpen}
        onClose={(newTodo: TodoData) => {
          addTodoToList(newTodo);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
