import React, { useState } from 'react';

// Dummy Check-In Data
const checkInData = [
  { roomNumber: '101', customer: 'John Doe', checkInDate: '2024-12-15', status: 'Pending', paymentStatus: 'Paid' },
  { roomNumber: '102', customer: 'Jane Smith', checkInDate: '2024-12-16', status: 'Pending', paymentStatus: 'Unpaid' },
  { roomNumber: '103', customer: 'Mark Wilson', checkInDate: '2024-12-17', status: 'Checked In', paymentStatus: 'Paid' },
  { roomNumber: '104', customer: 'Emily Johnson', checkInDate: '2024-12-18', status: 'Pending', paymentStatus: 'Paid' },
];

const CheckIn = () => {
  const [statusFilter, setStatusFilter] = useState('Pending');

  // Filter check-ins based on selected status
  const filteredCheckIns = checkInData.filter((checkIn) => {
    if (statusFilter === 'All') return true;
    return checkIn.status === statusFilter;
  });

  // Handle check-in action
  const handleCheckIn = (roomNumber) => {
    alert(`Check-In confirmed for Room ${roomNumber}`);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Check-In</h1>

      {/* Filter Section */}
      <section>
        <div className="flex justify-between items-center">
          <div>
            <label className="mr-4 text-lg font-semibold text-gray-700">Filter by Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg"
            >
              <option>All</option>
              <option>Pending</option>
              <option>Checked In</option>
            </select>
          </div>
        </div>
      </section>

      {/* Check-In Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Check-Ins</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCheckIns.map((checkIn, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Room {checkIn.roomNumber}</h3>
              <p className="text-gray-600 mt-2">Customer: {checkIn.customer}</p>
              <p className="text-gray-600 mt-2">Check-in Date: {checkIn.checkInDate}</p>
              <p className="text-gray-600 mt-2">Payment Status: {checkIn.paymentStatus}</p>
              <p className={`text-lg font-semibold mt-2 ${checkIn.status === 'Checked In' ? 'text-green-500' : 'text-yellow-500'}`}>
                Status: {checkIn.status}
              </p>
              <div className="mt-4 flex justify-between items-center">
                {checkIn.status === 'Pending' && (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleCheckIn(checkIn.roomNumber)}
                  >
                    Check In
                  </button>
                )}
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => alert(`Cancel Check-In for Room ${checkIn.roomNumber}`)}
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

export default CheckIn;
