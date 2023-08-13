import React from "react";

const Item = ({ item, onDeleteItems, onToggleItems }) => {
  return (
    <li key={item.id}>
      <input type="checkbox" onClick={() => onToggleItems(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
};

export default Item;
