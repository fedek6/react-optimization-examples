import React, { useState, memo, useMemo, useEffect, useCallback } from "react";
import { initialList } from "../data";
import { useRenderInfo } from "../hooks/useRenderInfo";
import { List } from "./List";

/* This example shows how memoizing child components will prevent rerendering them. */

// This won't rerender when parent state changes
const MemoizedList = memo(List);

export const FilteredOptimizedListWithCallbackBuggyConsole = () => {
  const [list, setList] = useState(initialList);
  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");
  const [term, setTerm] = useState("");

  useRenderInfo("FilteredOptimizedListWithCallbackBuggyConsole");

  const printList = () => {
    console.log("Current list state:", list);
  }

  useEffect(() => {
    printList();

  }, [list, printList]);

  const handleItemAdd = () => {
    setList([
      ...list,
      {
        id: String(Date.now()),
        content: item,
      },
    ]);
  };

  // List item click
  // This callback is refreshed on every component refresh.
  const handleListClick = useCallback((id: string) => {
    const index = list.findIndex((item) => {
      return item.id === id;
    })

    console.log("Found index:", index);

    if (index !== -1) {
      const newList = Array.from(list);
      newList[index] = { ...newList[index] , content: "CLICKED! BADUM" };

      setList(newList);
    }
  }, [list]);

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
      <p>🤬 This code has warning because `useCallback` is missing when using callback inside of `useEffect`</p>
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

      <MemoizedList list={filteredList} handleClick={handleListClick} />
    </div>
  );
};
