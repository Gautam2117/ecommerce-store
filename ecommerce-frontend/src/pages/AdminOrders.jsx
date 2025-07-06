import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await axios.get("/api/orders/all");
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📑 All Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No orders found.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-md">
          <table className="min-w-full text-sm bg-white rounded-xl">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs tracking-wider">
              <tr>
                <th className="p-4 text-left">Order ID</th>
                <th className="p-4 text-left">User</th>
                <th className="p-4 text-left">Items</th>
                <th className="p-4 text-left">Total</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 text-gray-800 font-medium truncate max-w-[180px]">
                    {order._id}
                  </td>
                  <td className="p-4 text-gray-700">
                    <div className="font-semibold">{order.userId?.name}</div>
                    <div className="text-xs text-gray-500">{order.userId?.email}</div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      {order.items.map((item, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-0.5 rounded-full"
                        >
                          {item.name} × {item.qty}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4 font-semibold text-green-700">
                    ₹{order.total}
                  </td>
                  <td className="p-4 text-gray-600">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
