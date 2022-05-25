import React, { useState, memo } from "react";
import { initialList } from "../data";
import { useRenderInfo } from "../hooks/useRenderInfo";
import { List } from "./List";

/* This example shows how dangerus is generating non state variables.
Every filtering rerenders list component. */

// This won't rerender when parent state changes
const MemoizedList = memo(List);

export const FilteredUnoptimizedList = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  useRenderInfo("FilteredUnoptimizedList");

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

  // Helper variable for filtered list
  // without useMemo it's recreated every component render
  const filteredList = list.filter((item) => {
    console.log("Filtering");
    return item.content.toLowerCase().includes(term.toLocaleLowerCase())
  });

  return (
    <div className="test-compo">
      <p>🤬 This componenet used non-memoized variable so it triggers multiple rerenders during typing!</p>
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
