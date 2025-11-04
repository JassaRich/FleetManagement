import { FaTruck, FaSearch, FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

export default function ShipList() {
  const shipments = [
    {
      id: "#SHP-001",
      origin: "Los Angeles, USA",
      destination: "New York, USA",
      status: "In Transit",
      date: "Nov 3, 2025",
      eta: "2 days",
    },
    {
      id: "#SHP-002",
      origin: "Berlin, Germany",
      destination: "Madrid, Spain",
      status: "Delivered",
      date: "Nov 2, 2025",
      eta: "Completed",
    },
    {
      id: "#SHP-003",
      origin: "Tokyo, Japan",
      destination: "Seoul, Korea",
      status: "Pending",
      date: "Nov 1, 2025",
      eta: "Awaiting pickup",
    },
    {
      id: "#SHP-004",
      origin: "Mumbai, India",
      destination: "Dubai, UAE",
      status: "Delayed",
      date: "Oct 30, 2025",
      eta: "Delayed - 1 day",
    },
    {
      id: "#SHP-005",
      origin: "Paris, France",
      destination: "Rome, Italy",
      status: "Delivered",
      date: "Oct 29, 2025",
      eta: "Completed",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Shipment List</h1>
          <p className="text-gray-500">Track and manage all your shipments in one place.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search shipments..."
            className="w-full sm:w-64 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-6 py-3 text-left">Shipment ID</th>
              <th className="px-6 py-3 text-left">Origin</th>
              <th className="px-6 py-3 text-left">Destination</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Date</th>
              <th className="px-6 py-3 text-left">ETA</th>
              <th className="px-6 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((ship) => (
              <tr
                key={ship.id}
                className="border-t hover:bg-gray-50 transition duration-150"
              >
                <td className="px-6 py-3 font-medium text-gray-900 flex items-center gap-2">
                  <FaTruck className="text-blue-500" />
                  {ship.id}
                </td>
                <td className="px-6 py-3 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" /> {ship.origin}
                </td>
                <td className="px-6 py-3 flex items-center gap-1">
                  <FaMapMarkerAlt className="text-gray-400" /> {ship.destination}
                </td>
                <td className="px-6 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      ship.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : ship.status === "In Transit"
                        ? "bg-blue-100 text-blue-700"
                        : ship.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {ship.status}
                  </span>
                </td>
                <td className="px-6 py-3">{ship.date}</td>
                <td className="px-6 py-3 flex items-center gap-1">
                  <FaClock className="text-gray-400" /> {ship.eta}
                </td>
                <td className="px-6 py-3">
                  <button className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium">
                    View <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-500">
          Showing <strong>1-5</strong> of <strong>20</strong> shipments
        </p>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm border rounded-md hover:bg-gray-100">Prev</button>
          <button className="px-3 py-1 text-sm border rounded-md bg-blue-600 text-white hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
