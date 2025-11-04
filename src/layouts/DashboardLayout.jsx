import React from "react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <h1 className="text-2xl font-bold text-blue-600">FleetMax</h1>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6m-6 4h6m-6 4h6"
              />
            </svg>
            Dashboard
          </Link>

          <Link
            to="/ships"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
            Ship List
          </Link>

          <Link
            to="/drivers"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A1 1 0 015 17v-1a3 3 0 013-3h8a3 3 0 013 3v1a1 1 0 01-.121.804l-2.758 4.134a1 1 0 01-1.662 0l-2.758-4.134z"
              />
              <circle cx="12" cy="8" r="4" />
            </svg>
            Drivers
          </Link>

          <Link
            to="/reports"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17v-6a2 2 0 012-2h8M9 17h8a2 2 0 002-2v-6M9 17L3 21V7a2 2 0 012-2h2"
              />
            </svg>
            Reports
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Fleet Management</h2>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="User"
              className="w-8 h-8 rounded-full border"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
