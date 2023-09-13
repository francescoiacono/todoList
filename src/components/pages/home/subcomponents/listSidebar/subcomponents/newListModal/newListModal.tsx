"use client";

import { Modal } from "@/components/ui";
import { ListData } from "@/types/todoTypes";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface NewListModalProps {
  isOpen: boolean;
  onClose: (newList: ListData) => void;
}

export const NewListModal: React.FC<NewListModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [newList, setNewList] = useState<ListData>({
    id: "",
    name: "",
    todos: [],
    completedTodos: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewList({
      ...newList,
      id: uuidv4(),
      name: e.target.value,
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <h1>Modal</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => onClose(newList)}>Add</button>
    </Modal>
  );
};
