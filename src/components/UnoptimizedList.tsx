import React, { useState } from "react";
import { initialList } from "../data";
import { useRenderInfo } from "../hooks/useRenderInfo";
import { List } from "./List";

/* This example shows how shared state can trigger multiple unneeded rerenders.
Type anything into input and check console for rerenders. */

export const UnoptimizedList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");

  useRenderInfo("UnoptimizedList");

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
      <p>😡 This component is unoptimized. It rerenders it's children.</p>
      <div>
        <input
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
          type="text"
        />
        <button onClick={handleItemAdd}>Add!</button>
      </div>

      <List list={list} />
    </div>
  );
};
