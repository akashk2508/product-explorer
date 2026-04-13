import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  } catch (err) {
    setError("Failed to fetch data");
    setLoading(false);
  }
};

    fetchData();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🛍️ Product Explorer</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h2 className="center">Loading...</h2>}
      {error && <h2 className="error">{error}</h2>}

      <div className="grid">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title.slice(0, 40)}...</h3>
            <p className="price">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;