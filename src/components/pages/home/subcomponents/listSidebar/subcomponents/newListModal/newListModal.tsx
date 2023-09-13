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
  const [list, setList] = useState<ListData>({
    id: "",
    name: "",
    todos: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setList({
      id: uuidv4(),
      name: e.target.value,
      todos: [],
    });
  };

  return (
    <Modal isOpen={isOpen}>
      <h1>Modal</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={() => onClose(list)}>Add</button>
    </Modal>
  );
};
