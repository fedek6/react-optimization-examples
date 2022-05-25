import React, { useState } from "react";
import type { TypeListItem } from "../data";

export const ItemAdder = ({ onItemAdd }: { onItemAdd: (item: TypeListItem) => void }) => {
  const [item, setItem] = useState("");

  const handleItemAdd = () => {
    onItemAdd({
      id: String(Date.now),
      content: item,
    })
  };

  return (
    <div>
      <input
        value={item}
        onChange={(e) => setItem(e.currentTarget.value)}
        type="text"
      />
      <button onClick={handleItemAdd}>Add!</button>
    </div>
  );
};
