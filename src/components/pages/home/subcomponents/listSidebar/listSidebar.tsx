"use client";
import { ListItems } from "./subcomponents";

export const ListSidebar = () => {
  return (
    <div className="border-r-2 h-full p-2 lg:w-1/6 md:w-fit text-sm overflow-hidden">
      <ListItems />
    </div>
  );
};
