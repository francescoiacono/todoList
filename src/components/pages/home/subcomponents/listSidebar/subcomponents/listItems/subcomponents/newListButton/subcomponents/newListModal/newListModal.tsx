"use client";

import { Button, Input, Modal } from "@/components/ui";
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
    <Modal title="New List" isOpen={isOpen}>
      <div className="flex gap-2">
        <Input type="text" onChange={handleChange} />
        <Button onClick={() => onClose(newList)}>Add</Button>
      </div>
    </Modal>
  );
};
