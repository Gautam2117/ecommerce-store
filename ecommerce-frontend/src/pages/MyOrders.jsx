import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("/api/orders/my");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">📦 My Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-lg text-gray-500">No orders found.</div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">
                  Order ID: <span className="font-mono">{order._id}</span>
                </span>
                <span className="text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-3 rounded border flex justify-between"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">
                        Quantity: {item.qty}
                      </p>
                    </div>
                    <p className="text-right font-semibold text-green-700">
                      ₹{item.price * item.qty}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-black">
                  Total: ₹{order.total}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
