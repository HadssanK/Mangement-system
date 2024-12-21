import React, { useState } from 'react';

// Dummy Bill Data
const billData = [
  { roomNumber: '101', guestName: 'John Doe', checkInDate: '2024-12-10', checkOutDate: '2024-12-15', roomCharge: 150, extraServices: 50, tax: 15, discount: 20 },
  { roomNumber: '102', guestName: 'Jane Smith', checkInDate: '2024-12-12', checkOutDate: '2024-12-16', roomCharge: 200, extraServices: 100, tax: 30, discount: 0 },
];

const GenerateBill = () => {
  const [selectedBill, setSelectedBill] = useState(null);

  // Handle selecting a bill to generate
  const handleSelectBill = (index) => {
    setSelectedBill(billData[index]);
  };

  // Calculate total bill amount
  const calculateTotal = () => {
    if (selectedBill) {
      const { roomCharge, extraServices, tax, discount } = selectedBill;
      return roomCharge + extraServices + tax - discount;
    }
    return 0;
  };

  // Handle generate bill action
  const handleGenerateBill = () => {
    alert(`Bill Generated for Room ${selectedBill.roomNumber}`);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Generate Bill</h1>

      {/* Select Bill Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Select a Guest to Generate Bill</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {billData.map((bill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6 cursor-pointer hover:shadow-xl" onClick={() => handleSelectBill(index)}>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">Room {bill.roomNumber}</h3>
              <p className="text-gray-600 mt-2">Guest: {bill.guestName}</p>
              <p className="text-gray-600 mt-2">Check-in: {bill.checkInDate}</p>
              <p className="text-gray-600 mt-2">Check-out: {bill.checkOutDate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bill Details Section */}
      {selectedBill && (
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bill Breakdown</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Room Charge:</span>
              <span className="text-gray-800">${selectedBill.roomCharge}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Extra Services:</span>
              <span className="text-gray-800">${selectedBill.extraServices}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax:</span>
              <span className="text-gray-800">${selectedBill.tax}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Discount:</span>
              <span className="text-gray-800">-${selectedBill.discount}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Amount:</span>
              <span className="text-green-600">${calculateTotal()}</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg"
              onClick={handleGenerateBill}
            >
              Generate Bill
            </button>
            <button
              className="bg-red-500 text-white py-2 px-4 rounded-lg"
              onClick={() => setSelectedBill(null)}
            >
              Cancel
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default GenerateBill;
