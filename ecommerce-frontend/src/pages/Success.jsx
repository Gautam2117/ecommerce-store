import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";

const Success = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center p-6 text-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <FiCheckCircle className="text-green-500 text-6xl mb-4 animate-ping-once" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Success!</h1>
      <p className="text-gray-700 max-w-md mb-6">
        Your action was completed successfully. Thank you for trusting us!
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/orders"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          View My Orders
        </Link>
        <Link
          to="/"
          className="border border-green-600 text-green-700 px-6 py-2 rounded hover:bg-green-100 transition"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;
