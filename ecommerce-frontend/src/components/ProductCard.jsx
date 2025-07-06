import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product, view }) => {
  const { dispatch } = useCart();

  return (
    <div
      className={`bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition h-full`}
    >
      <div className="flex flex-col h-full justify-between">
        <Link to={`/product/${product._id}`} className="block p-4">
          {/* Aspect Ratio Box for Image */}
          <div className="aspect-w-4 aspect-h-3 mb-3 overflow-hidden rounded-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-[4/3] object-contain rounded-md mb-3 bg-white"
            />
          </div>

          <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h2>
          <p className="text-sm text-gray-500 line-clamp-1">{product.category}</p>
          <p className="text-base font-bold text-green-700 mt-1">₹{product.price}</p>
        </Link>

        {/* Add to Cart Button */}
        <div className="px-4 pb-4 mt-auto">
          <button
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
            className="w-full py-2 mt-2 rounded-md bg-black text-white hover:bg-gray-800 transition"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
