"use client";

import { Modal } from "@/components/ui";
import { TodoData } from "@/types/todoTypes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface NewListModalProps {
  isOpen: boolean;
  onClose: (newTodo: TodoData) => void;
}

export const NewTodoModal: React.FC<NewListModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [newTodo, setNewTodo] = useState<TodoData>({
    id: "",
    name: "",
    status: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      id: uuidv4(),
      name: e.target.value,
      status: false,
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <h1>Add Todo</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => onClose(newTodo)}>Add</button>
    </Modal>
  );
};
