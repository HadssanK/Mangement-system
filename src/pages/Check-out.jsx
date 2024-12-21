import React, { useState } from 'react';

// Dummy Check-Out Data
const checkOutData = [
  { roomNumber: '101', customer: 'John Doe', checkOutDate: '2024-12-15', status: 'Checked In', outstandingBalance: 0 },
  { roomNumber: '102', customer: 'Jane Smith', checkOutDate: '2024-12-16', status: 'Checked In', outstandingBalance: 100 },
  { roomNumber: '103', customer: 'Mark Wilson', checkOutDate: '2024-12-17', status: 'Checked In', outstandingBalance: 0 },
  { roomNumber: '104', customer: 'Emily Johnson', checkOutDate: '2024-12-18', status: 'Checked In', outstandingBalance: 50 },
];

const CheckOut = () => {
  const [statusFilter, setStatusFilter] = useState('Checked In');

  // Filter check-outs based on selected status
  const filteredCheckOuts = checkOutData.filter((checkOut) => {
    if (statusFilter === 'All') return true;
    return checkOut.status === statusFilter;
  });

  // Handle check-out action
  const handleCheckOut = (roomNumber) => {
    alert(`Check-Out confirmed for Room ${roomNumber}`);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Check-Out</h1>

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
              <option>Checked In</option>
            </select>
          </div>
        </div>
      </section>

      {/* Check-Out Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Check-Outs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCheckOuts.map((checkOut, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6 hover:shadow-xl transform transition-all">
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Room {checkOut.roomNumber}</h3>
              <p className="text-gray-600 mt-2">Customer: {checkOut.customer}</p>
              <p className="text-gray-600 mt-2">Check-out Date: {checkOut.checkOutDate}</p>
              <p className="text-gray-600 mt-2">Outstanding Balance: ${checkOut.outstandingBalance}</p>
              <p className={`text-lg font-semibold mt-2 ${checkOut.status === 'Checked In' ? 'text-yellow-500' : 'text-green-500'}`}>
                Status: {checkOut.status}
              </p>
              <div className="mt-4 flex justify-between items-center">
                {checkOut.status === 'Checked In' && (
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleCheckOut(checkOut.roomNumber)}
                  >
                    Check Out
                  </button>
                )}
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg"
                  onClick={() => alert(`Cancel Check-Out for Room ${checkOut.roomNumber}`)}
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

export default CheckOut;
