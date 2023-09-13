"use client";

import { useTodoList } from "@/components/providers";
import { TodoList, CompletedList } from "./subcomponents";

export const CheckboxLists = () => {
  const { currentList } = useTodoList();
  return (
    <div>
      <h1 className="mb-4">{currentList?.name}</h1>
      <div className="flex flex-col gap-4">
        <TodoList />
        <CompletedList />
      </div>
    </div>
  );
};
