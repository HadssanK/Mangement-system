import React from 'react';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Total Rooms */}
          <div className="bg-gradient-to-r from-teal-400 to-teal-600 shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-white">Total Rooms</h3>
            <p className="text-white text-2xl mt-4">120</p>
          </div>

          {/* Card 2 - Active Reservations */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-white">Active Reservations</h3>
            <p className="text-white text-2xl mt-4">45</p>
          </div>

          {/* Card 3 - Occupancy Rate */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 shadow-xl rounded-lg p-6 hover:scale-105 transform transition-all">
            <h3 className="text-xl font-semibold text-white">Occupancy Rate</h3>
            <p className="text-white text-2xl mt-4">85%</p>
          </div>
        </div>
      </section>

      {/* Room Management Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Room Management</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Room Card Example */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouSq_6PQV_RXPovXW_frOCh9ZrI4VU3sx8g&s"
              alt="Room"
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Deluxe Suite</h3>
            <p className="text-gray-600 mt-2">Available</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Manage</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Remove</button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reservations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Reservation Card Example */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
            <h3 className="text-xl font-semibold text-gray-800">Hassan</h3>
            <p className="text-gray-600 mt-2">Room: Deluxe Suite</p>
            <p className="text-gray-600 mt-2">Check-in: 2024-12-20</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg">Check-in</button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">View</button>
            </div>
          </div>
        </div>
      </section>

      {/* Billing Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Billing</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Billing Card Example */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
            <h3 className="text-xl font-semibold text-gray-800">Invoice #12345</h3>
            <p className="text-gray-600 mt-2">Amount: $350</p>
            <p className="text-gray-600 mt-2">Due Date: 2024-12-30</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">View Invoice</button>
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Pay Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Queries Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Queries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Query Card Example */}
          <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600 mt-2">Query: How can I make a reservation?</p>
            <p className="text-gray-600 mt-2">Status: Pending</p>
            <div className="mt-4 flex justify-between items-center">
              <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Resolve</button>
              <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Delete</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 py-4 bg-gray-800 text-center text-white">
        <p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
