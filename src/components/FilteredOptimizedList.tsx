import React, { useState, memo, useMemo } from "react";
import { initialList } from "../data";
import { useRenderInfo } from "../hooks/useRenderInfo";
import { List } from "./List";

/* This example shows how memoizing child components will prevent rerendering them. */

// This won't rerender when parent state changes
const MemoizedList = memo(List);

export const FilteredOptimizedList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  useRenderInfo("FilteredOptimizedList");

  const handleItemAdd = () => {
    setList([
      ...list,
      {
        id: String(Date.now()),
        content: item,
      },
    ]);
  };

  const handleSearch = () => {
    setTerm(search);
  }

  // It's changed only when deps are changed
  const filteredList = useMemo(() => list.filter((item) => {
    console.log("Filtering");
    return item.content.toLowerCase().includes(term.toLocaleLowerCase())
  }), [term, list]);

  return (
    <div className="test-compo">
      <p>😎 List does not rerender when component state is changed.</p>
      <div>
        <input
          value={item}
          onChange={(e) => setItem(e.currentTarget.value)}
          type="text"
        />
        <button onClick={handleItemAdd}>Add!</button>
      </div>
      <div>
        <input
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
          type="text"
        />
        <button onClick={handleSearch}>Search!</button>
      </div>

      <MemoizedList list={filteredList} />
    </div>
  );
};
