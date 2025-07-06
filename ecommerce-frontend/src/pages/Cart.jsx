import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const { auth } = useAuth();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = async () => {
    try {
      if (!auth.token) {
        alert("Please login to continue checkout.");
        return navigate("/login");
      }

      const orderItems = cart.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        image: item.image,
      }));

      await axios.post("/api/orders", {
        items: orderItems,
        total,
      });

      dispatch({ type: "CLEAR_CART" });
      navigate("/success");
    } catch (err) {
      console.error("Order failed:", err);
      alert("❌ Checkout failed. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center text-lg">
          <p className="mb-4 text-gray-600">Your cart is empty.</p>
          <Link to="/" className="text-blue-600 underline hover:text-blue-800">
            ← Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="flex flex-col gap-6 mb-8">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 gap-4 shadow-sm rounded-md"
              >
                <div className="flex items-center gap-4 w-full sm:w-2/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded shadow"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                    <p className="text-base font-medium mt-1">₹{item.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) =>
                      dispatch({
                        type: "UPDATE_QTY",
                        payload: { id: item._id, qty: parseInt(e.target.value) },
                      })
                    }
                    className="w-16 border rounded px-2 py-1 shadow-sm text-center"
                  />
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: item._id })
                    }
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="space-x-2">
              <Link
                to="/"
                className="px-4 py-2 border border-gray-500 rounded hover:bg-gray-100 transition"
              >
                ← Continue Shopping
              </Link>
              <button
                onClick={() => dispatch({ type: "CLEAR_CART" })}
                className="px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-50 transition"
              >
                Clear Cart
              </button>
            </div>

            <div className="text-right">
              <p className="text-xl font-semibold mb-2">
                Total: <span className="text-green-700">₹{total}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition font-medium shadow"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
