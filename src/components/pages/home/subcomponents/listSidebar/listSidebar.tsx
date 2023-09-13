"use client";

import { ListData } from "@/types/todoTypes";
import { useTodoList } from "@/components/providers";
import { useState } from "react";
import { ListItems, NewListModal } from "./subcomponents";

export const ListSidebar = () => {
  const { addList } = useTodoList();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border-r-2 h-full p-2 lg:w-1/6 md:w-fit">
      <h1>Lists</h1>

      <ListItems />

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
