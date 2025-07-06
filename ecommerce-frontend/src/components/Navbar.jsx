import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { auth, logout } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-4 shadow-lg backdrop-blur-md bg-opacity-80 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-extrabold tracking-tight hover:scale-105 transition transform duration-200 ease-in-out"
        >
          🛍️ <span className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">E-Store</span>
        </Link>

        {/* Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-pink-400 transition">Home</Link>

          <Link to="/cart" className="relative group hover:text-yellow-400 transition">
            Cart
            <span className="absolute -top-3 -right-4 bg-red-600 animate-pulse text-white text-[10px] px-2 py-0.5 rounded-full shadow-md">
              {cart.length}
            </span>
          </Link>

          {auth.user && (
            <>
              <Link to="/orders" className="hover:text-green-400 transition">
                My Orders
              </Link>

              {auth.user.isAdmin && (
                <Link
                  to="/admin"
                  className="hover:text-yellow-300 transition border border-yellow-300 px-2 py-0.5 rounded-md"
                >
                  Admin
                </Link>
              )}

              <span className="text-gray-400 font-medium hidden sm:inline-block">
                {auth.user.name}
              </span>

              <button
                onClick={logout}
                className="text-red-400 underline hover:text-red-300 transition ml-1"
              >
                Logout
              </button>
            </>
          )}

          {!auth.user && (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-pink-600 to-purple-600 px-3 py-1 rounded-full text-white hover:opacity-90 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
