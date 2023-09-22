import { ListSidebar, Todos } from './subcomponents';

export const Home = () => {
  return (
    <main className=' h-screen flex transition-all duration-300'>
      <ListSidebar />
      <Todos />
    </main>
  );
};
