import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2 className="title">TODO</h2>
      <input
        type="text"
        placeholder="Create A new Todo"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="form-input"
      />
      <button>Add</button>
    </form>
  );
}
