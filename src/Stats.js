import React from "react";

const Stats = ({ items }) => {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start Adding some items to your Packing List 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed !== false).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got Everything! Ready to Go ✈️"
          : `🧳 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}%) items.`}
      </em>
    </footer>
  );
};

export default Stats;
