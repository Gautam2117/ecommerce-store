import { FaThLarge, FaList } from "react-icons/fa";

const ListToggle = ({ view, setView }) => (
  <div className="flex gap-2 items-center mb-6 bg-white shadow-md rounded-full px-3 py-2 w-fit border border-gray-200">
    <button
      className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
        view === "grid"
          ? "bg-black text-white shadow"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
      onClick={() => setView("grid")}
    >
      <FaThLarge className="text-xs" />
      Grid
    </button>

    <button
      className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
        view === "list"
          ? "bg-black text-white shadow"
          : "bg-gray-100 hover:bg-gray-200 text-gray-700"
      }`}
      onClick={() => setView("list")}
    >
      <FaList className="text-xs" />
      List
    </button>
  </div>
);

export default ListToggle;
