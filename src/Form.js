import React, { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip 🥰 ?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          // console.log(e.target.value);
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
