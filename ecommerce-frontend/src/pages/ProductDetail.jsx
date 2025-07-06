import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  if (!product)
    return (
      <div className="p-6 text-center text-gray-600 text-lg">Loading...</div>
    );

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
      {/* Product Image */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>

        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        <div className="text-sm text-gray-500 space-y-1">
          <p>
            <span className="font-medium text-gray-700">Category:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-medium text-gray-700">Brand:</span>{" "}
            {product.brand}
          </p>
        </div>

        <p className="text-3xl font-semibold text-green-700">
          ₹{product.price}
        </p>

        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="mt-4 bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
