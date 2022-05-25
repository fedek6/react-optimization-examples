import React from "react";
import { useRenderInfo } from "../hooks/useRenderInfo";
import type { TypeInitialList } from "../data";

export const List = ({ list, handleClick }: { list: TypeInitialList, handleClick?: (id: string) => void }) => {
  useRenderInfo("List");
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id} onClick={() => handleClick && handleClick(item.id)}>
          {item.id}: {item.content}
        </li>
      ))}
    </ul>
  );
};
