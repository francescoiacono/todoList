"use client";

import { ListData } from "@/types/todoTypes";
import { useTodoList } from "@/components/providers";
import { useState } from "react";
import { NewListModal } from "./subcomponents";

export const ListSidebar = () => {
  const { lists, addList, loadList } = useTodoList();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border-r-2 w-1/6 h-full p-2">
      <h1>Lists</h1>
      <ul className="p-2">
        {lists.length === 0 ? (
          <li>Create your first todo task list!</li>
        ) : (
          lists.map((list: ListData) => (
            <li key={list.id}>
              <button onClick={() => loadList(list.id)}>{list.name}</button>
            </li>
          ))
        )}
      </ul>
      <button
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        + List
      </button>
      <NewListModal
        isOpen={isModalOpen}
        onClose={(newList: ListData) => {
          addList(newList);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};
