import { Button, Input } from "@/components/ui";
export const TaskInput = () => {
  return (
    <div className="w-10/12 m-auto">
      <div className="flex gap-3">
        <Input className="flex-grow" />
        <Button className="flex-grow-2">Click me</Button>
      </div>
    </div>
  );
};
