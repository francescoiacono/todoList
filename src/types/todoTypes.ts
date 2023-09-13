export type TodoData = {
  id: string;
  name: string;
  status: boolean;
};

export type ListData = {
  id: string;
  name: string;
  todos: TodoData[];
};
