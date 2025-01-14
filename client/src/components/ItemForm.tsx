import axios from "axios";
import { useState } from "react";

const ItemForm = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const createItem = async () => {
    try {
      await axios.post(
        "https://item-management-vercel-deploy-server-m4z2s861q.vercel.app/items",
        // "http://localhost:5000/items",
        {
          name,
          quantity,
        }
      );
      alert("Item created!");
    } catch (error) {
      console.error("Fail to create item.", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createItem();
      }}
    >
      <h2>Add item</h2>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label htmlFor="quantity">
        Quantity:
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
};

export default ItemForm;
