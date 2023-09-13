"use client";

import { ListData } from "@/types/todoTypes";
import { useTodoList } from "@/components/providers";
import { useState } from "react";
import { NewListModal } from "./subcomponents";

export const ListSidebar = () => {
  const { lists, addList } = useTodoList();

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="border-r-2 w-1/6 h-full p-2">
      <h1 className=" text-2xl">List</h1>
      <ul className="p-2">
        {lists.length === 0 ? (
          <li>Create your first todo task list!</li>
        ) : (
          lists.map((list: ListData) => (
            <li key={list.id}>
              <a href="#">{list.name}</a>
            </li>
          ))
        )}
      </ul>
      <button
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        + list
      </button>
      <NewListModal
        isOpen={openModal}
        onClose={(newList: ListData) => {
          addList(newList);
          setOpenModal(false);
        }}
      />
    </div>
  );
};
