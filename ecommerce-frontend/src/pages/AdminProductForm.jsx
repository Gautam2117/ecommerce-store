import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AdminProductForm = () => {
  const { id } = useParams();
  const [form, setForm] = useState({
    name: "",
    price: 0,
    category: "",
    brand: "",
    image: "",
    description: "",
    countInStock: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const { data } = await axios.get(`/api/products/${id}`);
        setForm(data);
      }
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`/api/products/${id}`, form);
      alert("✅ Product updated successfully");
    } else {
      await axios.post("/api/products", form);
      alert("✅ Product created successfully");
    }
    navigate("/admin");
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        {id ? "Edit Product" : "Add New Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {[
          { name: "name", label: "Product Name" },
          { name: "brand", label: "Brand" },
          { name: "category", label: "Category" },
          { name: "image", label: "Image URL" },
          { name: "description", label: "Description" },
        ].map(({ name, label }) => (
          <div key={name}>
            <label className="block mb-1 font-medium text-gray-700">{label}</label>
            <input
              type="text"
              placeholder={label}
              value={form[name]}
              onChange={(e) => setForm({ ...form, [name]: e.target.value })}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        ))}

        {/* Price and CountInStock Side by Side */}
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Price (₹)</label>
            <input
              type="number"
              value={form.price}
              onChange={(e) =>
                setForm({ ...form, price: parseFloat(e.target.value) || 0 })
              }
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1 font-medium text-gray-700">Count In Stock</label>
            <input
              type="number"
              value={form.countInStock}
              onChange={(e) =>
                setForm({ ...form, countInStock: parseInt(e.target.value) || 0 })
              }
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition font-semibold"
        >
          {id ? "Update Product" : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default AdminProductForm;
