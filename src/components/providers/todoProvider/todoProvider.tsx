"use client";

import { ListData, TodoData } from "@/types/todoTypes";
import { createContext, useContext, useEffect, useState } from "react";

interface ListProviderProps {
  children: React.ReactNode;
}

interface ListContextProps {
  lists: ListData[];
  currentList: ListData | null;
  addList: (list: ListData) => void;
  loadList: (listId: string) => void;
  removeList: (listId: string) => void;
  addTodoToList: (todo: TodoData) => void;
  setTodoStatus: (todoId: string) => void;
  removeTodoFromList: (todoId: string) => void;
}

export const ListContext = createContext<ListContextProps>({
  lists: [],
  currentList: null,
  addList: () => {},
  loadList: () => {},
  removeList: () => {},
  addTodoToList: () => {},
  setTodoStatus: () => {},
  removeTodoFromList: () => {},
});

export const ListProvider: React.FC<ListProviderProps> = (props) => {
  const [lists, setLists] = useState<ListData[]>([]);
  const [currentList, setCurrentList] = useState<ListData | null>(null);

  useEffect(() => {
    const listData = localStorage.getItem("list");
    if (listData) {
      setCurrentList(JSON.parse(listData)[0]);
      setLists(JSON.parse(listData));
    }
  }, []);

  const addList = (newList: ListData) => {
    const newLists = [...lists, newList];
    setLists(newLists);
    setCurrentList(newList);
    localStorage.setItem("list", JSON.stringify(newLists));
  };

  const loadList = (listId: string) => {
    const list = lists.find((listItem) => listItem.id === listId);
    if (list) {
      setCurrentList(list);
    }
  };

  const removeList = (listId: string) => {
    const updatedLists = lists.filter((listItem) => listItem.id !== listId);

    setLists(updatedLists);
    localStorage.setItem("list", JSON.stringify(updatedLists));
  };

  const addTodoToList = (todo: TodoData) => {
    if (!currentList) return;

    const updatedTodos = [...currentList.todos, todo];
    const updatedLists = lists.map((listItem) => {
      if (listItem.id === currentList.id) {
        return { ...listItem, todos: updatedTodos };
      }
      return listItem;
    });

    setCurrentList({ ...currentList, todos: updatedTodos });
    setLists(updatedLists);

    localStorage.setItem("list", JSON.stringify(updatedLists));
  };

  const setTodoStatus = (todoId: string) => {
    if (!currentList) return;

    const updatedList = toggleTodoCompletion(currentList, todoId);

    const updatedLists = lists.map((list) =>
      list.id === currentList.id ? updatedList : list
    );

    setCurrentList(updatedList);
    setLists(updatedLists);
    localStorage.setItem("list", JSON.stringify(updatedLists));
  };

  const toggleTodoCompletion = (list: ListData, todoId: string) => {
    const updatedList: ListData = {
      ...list,
      todos: [...list.todos],
      completedTodos: [...list.completedTodos],
    };

    const todoIndex = updatedList.todos.findIndex((todo) => todo.id === todoId);

    if (todoIndex !== -1) {
      const [movingTodo] = updatedList.todos.splice(todoIndex, 1);
      movingTodo.status = true;
      updatedList.completedTodos.push(movingTodo);
    } else {
      const completedTodoIndex = updatedList.completedTodos.findIndex(
        (todo) => todo.id === todoId
      );

      if (completedTodoIndex !== -1) {
        const [movingTodo] = updatedList.completedTodos.splice(
          completedTodoIndex,
          1
        );
        movingTodo.status = false;
        updatedList.todos.push(movingTodo);
      }
    }

    return updatedList;
  };

  const removeTodoFromList = (todoId: string) => {
    if (!currentList) return;

    const updatedTodos = currentList.todos.filter((todo) => todo.id !== todoId);
    const updatedCompletedTodos = currentList.completedTodos.filter(
      (todo) => todo.id !== todoId
    );

    const updatedLists = lists.map((listItem) => {
      if (listItem.id === currentList.id) {
        return {
          ...listItem,
          todos: updatedTodos,
          completedTodos: updatedCompletedTodos,
        };
      }
      return listItem;
    });

    setCurrentList({
      ...currentList,
      todos: updatedTodos,
      completedTodos: updatedCompletedTodos,
    });
    setLists(updatedLists);

    localStorage.setItem("list", JSON.stringify(updatedLists));
  };

  return (
    <ListContext.Provider
      value={{
        lists,
        currentList,
        addList,
        loadList,
        removeList,
        addTodoToList,
        setTodoStatus,
        removeTodoFromList,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export const useTodoList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error("useTodoList must be used within a TodoListProvider");
  }
  return context;
};
