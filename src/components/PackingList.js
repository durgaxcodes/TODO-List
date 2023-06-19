import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("all");

  let sortedItems;

  if (sortBy === "all") sortedItems = items;

  if (sortBy === "completed")
    sortedItems = items.slice().filter((item) => item.packed === true);

  if (sortBy === "active")
    sortedItems = items.slice().filter((item) => item.packed !== true);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="all">Sort by All</option>
          <option value="completed">Sort by Completed</option>
          <option value="active">Sort by Active</option>
        </select>
        <button onClick={onClearList} className="clear-btn">
          Clear list
        </button>
      </div>
    </div>
  );
}
