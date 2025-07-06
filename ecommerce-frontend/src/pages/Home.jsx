import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import ListToggle from "../components/ListToggle";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products?search=${search}`);
      setProducts(data);
    };
    fetchProducts();
  }, [search]);

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-7xl mx-auto">
      {/* Search + View Toggle */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-1/2 p-2 px-4 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
        />
        <ListToggle view={view} setView={setView} />
      </div>

      {/* Products */}
      {products.length === 0 ? (
        <div className="text-center mt-20 text-gray-600 text-lg">
          <p>🙁 No products match your search.</p>
        </div>
      ) : (
        // Home.jsx
        <div
          className={`${
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex flex-col gap-6"
          }`}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} view={view} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
