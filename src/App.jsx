import { useState, useEffect } from "react";
import axios from "axios";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

export default function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch list items
  useEffect(() => {
    axios
      .get(API_URI)
      .then((response) => {
        console.log("Fetched Data:", response.data);
        setItems(response.data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(`Error fetching items: ${err.message}`);
      });
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URI}/${id}`);
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError(`Error deleting item: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Door List</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
}
