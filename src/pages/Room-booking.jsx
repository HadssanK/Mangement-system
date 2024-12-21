import React, { useState } from "react";

// Dummy Room Booking Data
const bookingsData = [
  {
    roomNumber: "101",
    customer: "John Doe",
    checkIn: "2024-12-15",
    checkOut: "2024-12-18",
    status: "Confirmed",
    amount: 500,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_hAECV8a-8-0hpfEty_E3xwgwnZ577eOikA&s",
  },
  {
    roomNumber: "102",
    customer: "Jane Smith",
    checkIn: "2024-12-16",
    checkOut: "2024-12-20",
    status: "Pending",
    amount: 400,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEO-KVDZBihVghxuwgX1D50J_1r35EeaFTw&s",
  },
  {
    roomNumber: "103",
    customer: "Mark Wilson",
    checkIn: "2024-12-17",
    checkOut: "2024-12-19",
    status: "Canceled",
    amount: 300,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3fx8_nOvtTZfOwF1XGUDbhz4oQyxm4HwpQw&s",
  },
  {
    roomNumber: "104",
    customer: "Emily Johnson",
    checkIn: "2024-12-18",
    checkOut: "2024-12-22",
    status: "Confirmed",
    amount: 450,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ZNh1k4Mlj4F6-X_VygHDLmlsvYUs9nxXuA&s",
  },
];

const RoomBooking = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  // Filter bookings based on selected status
  const filteredBookings = bookingsData.filter((booking) => {
    if (statusFilter === "All") return true;
    return booking.status === statusFilter;
  });

  // Handle booking actions (Confirm, Cancel, Edit)
  const handleAction = (action, roomNumber) => {
    alert(`${action} for Room ${roomNumber}`);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Room Booking
      </h1>

      {/* Filter Section */}
      <section>
        <div className="flex justify-between items-center">
          <div>
            <label className="mr-4 text-lg font-semibold text-gray-700">
              Filter by Status
            </label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option>All</option>
              <option>Confirmed</option>
              <option>Pending</option>
              <option>Canceled</option>
            </select>
          </div>
        </div>
      </section>

      {/* Room Booking Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Manage Room Bookings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all"
            >
              {/* Room Image */}
              <img
                src={booking.image}
                alt={`Room ${booking.roomNumber}`}
                className="w-full h-48 object-cover rounded-lg"
              />

              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Room {booking.roomNumber}
              </h3>
              <p className="text-gray-600 mt-2">Customer: {booking.customer}</p>
              <p className="text-gray-600 mt-2">Check-in: {booking.checkIn}</p>
              <p className="text-gray-600 mt-2">
                Check-out: {booking.checkOut}
              </p>
              <p
                className={`text-lg font-semibold mt-2 ${
                  booking.status === "Confirmed"
                    ? "text-green-500"
                    : booking.status === "Pending"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                Status: {booking.status}
              </p>
              <p className="text-gray-600 mt-2">Amount: ${booking.amount}</p>
              <div className="mt-4 flex justify-between items-center">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                  onClick={() =>
                    handleAction("Confirm Booking", booking.roomNumber)
                  }
                >
                  Confirm
                </button>
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
                  onClick={() =>
                    handleAction("Edit Booking", booking.roomNumber)
                  }
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={() =>
                    handleAction("Cancel Booking", booking.roomNumber)
                  }
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RoomBooking;
