import {
  FaTruck,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaUsers,
  FaWarehouse,
  FaExclamationTriangle,
} from "react-icons/fa";
import { IoTrendingUp, IoTrendingDown } from "react-icons/io5";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const metrics = [
    {
      title: "Active Shipments",
      value: "42",
      subtitle: "Currently in transit",
      icon: <FaTruck className="text-green-500 text-xl" />,
      change: "+12%",
      trend: "up",
    },
    {
      title: "Delivered Today",
      value: "28",
      subtitle: "Successful deliveries",
      icon: <FaCheckCircle className="text-green-500 text-xl" />,
      change: "+8%",
      trend: "up",
    },
    {
      title: "Pending Orders",
      value: "156",
      subtitle: "Awaiting processing",
      icon: <FaClock className="text-red-400 text-xl" />,
      change: "-5%",
      trend: "down",
    },
    {
      title: "Revenue (MTD)",
      value: "$284,590",
      subtitle: "Month to date",
      icon: <FaDollarSign className="text-green-500 text-xl" />,
      change: "+15%",
      trend: "up",
    },
    {
      title: "Fleet Utilization",
      value: "87%",
      subtitle: "Vehicle efficiency",
      icon: <IoTrendingUp className="text-green-500 text-xl" />,
      change: "+3%",
      trend: "up",
    },
    {
      title: "Active Clients",
      value: "1,247",
      subtitle: "Total active clients",
      icon: <FaUsers className="text-green-500 text-xl" />,
      change: "+23%",
      trend: "up",
    },
    {
      title: "Warehouse Capacity",
      value: "73%",
      subtitle: "Average utilization",
      icon: <FaWarehouse className="text-red-400 text-xl" />,
      change: "-2%",
      trend: "down",
    },
    {
      title: "Delayed Shipments",
      value: "7",
      subtitle: "Requiring attention",
      icon: <FaExclamationTriangle className="text-red-400 text-xl" />,
      change: "-12%",
      trend: "down",
    },
  ];

  const shipmentsData = [
    { month: "Jan", delivered: 120, delayed: 15, inTransit: 40 },
    { month: "Feb", delivered: 98, delayed: 22, inTransit: 35 },
    { month: "Mar", delivered: 150, delayed: 10, inTransit: 50 },
    { month: "Apr", delivered: 130, delayed: 8, inTransit: 45 },
    { month: "May", delivered: 160, delayed: 12, inTransit: 60 },
    { month: "Jun", delivered: 180, delayed: 18, inTransit: 70 },
  ];

  const vehicleUsage = [
    { name: "Trucks", value: 45 },
    { name: "Vans", value: 25 },
    { name: "Containers", value: 30 },
  ];

  const recentShipments = [
    {
      id: "#SHP-001",
      origin: "Los Angeles, USA",
      destination: "New York, USA",
      status: "In Transit",
      date: "Nov 3, 2025",
    },
    {
      id: "#SHP-002",
      origin: "Berlin, Germany",
      destination: "Madrid, Spain",
      status: "Delivered",
      date: "Nov 2, 2025",
    },
    {
      id: "#SHP-003",
      origin: "Tokyo, Japan",
      destination: "Seoul, Korea",
      status: "Pending",
      date: "Nov 1, 2025",
    },
    {
      id: "#SHP-004",
      origin: "Mumbai, India",
      destination: "Dubai, UAE",
      status: "Delayed",
      date: "Oct 30, 2025",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500">
            Welcome back! Here’s what’s happening with your logistics operations.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            + Add Vehicle
          </button>
          <button className="bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            + New Shipment
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-gray-600 font-semibold">{metric.title}</h3>
              <span className="bg-green-50 p-2 rounded-full">{metric.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
            <p className="text-sm text-gray-500">{metric.subtitle}</p>
            <div className="flex items-center mt-2">
              {metric.trend === "up" ? (
                <IoTrendingUp className="text-green-500 mr-1" />
              ) : (
                <IoTrendingDown className="text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-semibold ${
                  metric.trend === "up" ? "text-green-600" : "text-red-500"
                }`}
              >
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Line Chart - Shipment Trend */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Monthly Shipment Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={shipmentsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="delivered" stroke="#22c55e" strokeWidth={2} />
              <Line type="monotone" dataKey="inTransit" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="delayed" stroke="#ef4444" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Vehicle Usage */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Vehicle Utilization
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vehicleUsage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Shipments Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recent Shipments
        </h2>
        <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="py-3 px-4 text-left">Shipment ID</th>
              <th className="py-3 px-4 text-left">Origin</th>
              <th className="py-3 px-4 text-left">Destination</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {recentShipments.map((ship) => (
              <tr
                key={ship.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-900">
                  {ship.id}
                </td>
                <td className="py-3 px-4">{ship.origin}</td>
                <td className="py-3 px-4">{ship.destination}</td>
                <td className="py-3 px-4">
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
                <td className="py-3 px-4">{ship.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
