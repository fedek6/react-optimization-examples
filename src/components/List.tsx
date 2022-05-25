import React from "react";
import { useRenderInfo } from "../hooks/useRenderInfo";
import type { TypeInitialList } from "../data";

export const List = ({ list }: { list: TypeInitialList }) => {
  useRenderInfo("List");
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          {item.id}: {item.content}
        </li>
      ))}
    </ul>
  );
};
