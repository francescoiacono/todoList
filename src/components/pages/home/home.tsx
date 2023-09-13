import { ListSidebar, Todos } from "./subcomponents";

export const Home = () => {
  return (
    <main className=" h-screen flex">
      <ListSidebar />
      <Todos />
    </main>
  );
};
