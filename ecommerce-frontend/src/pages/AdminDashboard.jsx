import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    await axios.delete(`/api/products/${id}`);
    fetchProducts();
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-3xl font-bold text-gray-800">🛠 Admin Dashboard</h2>
        <Link
          to="/admin/create"
          className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          ➕ Add Product
        </Link>
      </div>

      <div className="overflow-x-auto rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left bg-white rounded-xl">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider">
            <tr>
              <th className="py-3 px-5">Product</th>
              <th className="py-3 px-5">Price</th>
              <th className="py-3 px-5">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map((p) => (
              <tr key={p._id} className="hover:bg-gray-50 transition">
                <td className="py-3 px-5 font-medium text-gray-800">{p.name}</td>
                <td className="py-3 px-5 font-semibold text-green-700">₹{p.price}</td>
                <td className="py-3 px-5 space-x-3">
                  <Link
                    to={`/admin/edit/${p._id}`}
                    className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs hover:bg-blue-200"
                  >
                    ✏️ Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(p._id)}
                    className="inline-block px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs hover:bg-red-200"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center py-6 text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
