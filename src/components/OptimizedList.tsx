import React, { useState, memo } from "react";
import { initialList } from "../data";
import { useRenderInfo } from "../hooks/useRenderInfo";
import { List } from "./List";

/* This example shows how memoizing child components will prevent rerendering them. */

// This won't rerender when parent state changes
const MemoizedList = memo(List);

export const OptimizedList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");

  useRenderInfo("OptimizedList");

  const handleItemAdd = () => {
    setList([
      ...list,
      {
        id: String(Date.now()),
        content: item,
      },
    ]);
  };

  return (
    <div className="test-compo">
      <p>This component uses memo for it's child components.</p>
      <div>
        <input
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
          type="text"
        />
        <button onClick={handleItemAdd}>Add!</button>
      </div>

      <MemoizedList list={list} />
    </div>
  );
};
