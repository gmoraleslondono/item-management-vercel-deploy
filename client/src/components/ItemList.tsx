import axios from "axios";
import { useEffect, useState } from "react";

interface Item {
  _id: string;
  name: string;
  quantity: number;
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://item-management-vercel-deploy-server.vercel.app/items"
        // "http://localhost:5000/items"
      );
      setItems(response.data);
    } catch (error) {
      console.error("Fail to fetch items.", error);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const response = await axios.delete(
        `https://item-management-vercel-deploy-server.vercel.app/items/${id}`
        // `http://localhost:5000/items/${id}`
      );
      console.log(response.data);
      fetchItems();
    } catch (error) {
      console.error("Fail to delete item.", error);
    }
  };

  return (
    <div>
      <h2>Items</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => deleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemList;
