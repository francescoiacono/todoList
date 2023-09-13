import { ListSidebar, TodoList } from "./subcomponents";

export const Home = () => {
  return (
    <main className=" h-screen flex">
      <ListSidebar />
      <TodoList />
    </main>
  );
};
