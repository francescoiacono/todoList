"use client";
import { useTodoList } from "@/components/providers";
import { NewTodoModal } from "./subcomponents";
import { useState } from "react";
import { TodoData } from "@/types/todoTypes";

export const TodoList = () => {
  const { currentList, addTodoToList, setTodoStatus } = useTodoList();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h1>{currentList?.name}</h1>
      <ul>
        {currentList?.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => setTodoStatus(todo.id)}
            />
            <span>{todo.name}</span>
          </li>
        ))}
      </ul>
      <button onClick={() => setIsModalOpen(true)}>+ Todo</button>
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
