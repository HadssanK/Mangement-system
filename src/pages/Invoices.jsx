import React, { useState } from 'react';

// Dummy Invoice Data
const invoiceData = [
  { invoiceId: 'INV123', guestName: 'John Doe', roomNumber: '101', totalAmount: 215, status: 'Paid', date: '2024-12-15' },
  { invoiceId: 'INV124', guestName: 'Jane Smith', roomNumber: '102', totalAmount: 330, status: 'Pending', date: '2024-12-16' },
  { invoiceId: 'INV125', guestName: 'Alice Brown', roomNumber: '103', totalAmount: 450, status: 'Paid', date: '2024-12-18' },
];

const Invoices = () => {
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter invoices by status
  const filteredInvoices = invoiceData.filter(invoice => filterStatus === 'All' || invoice.status === filterStatus);

  // Handle viewing invoice details
  const handleViewInvoice = (invoiceId) => {
    setSelectedInvoice(invoiceData.find(invoice => invoice.invoiceId === invoiceId));
  };

  // Handle downloading invoice (for demonstration, just alert)
  const handleDownloadInvoice = (invoiceId) => {
    alert(`Downloading invoice ${invoiceId}`);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Invoices</h1>

      {/* Filter and Search Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <label htmlFor="statusFilter" className="mr-2 text-gray-700">Filter by Status:</label>
          <select
            id="statusFilter"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="bg-white border rounded-lg p-2"
          >
            <option value="All">All</option>
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by Guest Name or Room Number"
          className="border p-2 rounded-lg"
        />
      </div>

      {/* Invoices Table */}
      <section>
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Invoice ID</th>
              <th className="py-3 px-4 text-left">Guest Name</th>
              <th className="py-3 px-4 text-left">Room Number</th>
              <th className="py-3 px-4 text-left">Total Amount</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInvoices.map((invoice, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{invoice.invoiceId}</td>
                <td className="py-3 px-4">{invoice.guestName}</td>
                <td className="py-3 px-4">{invoice.roomNumber}</td>
                <td className="py-3 px-4">${invoice.totalAmount}</td>
                <td className="py-3 px-4">{invoice.status}</td>
                <td className="py-3 px-4">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
                    onClick={() => handleViewInvoice(invoice.invoiceId)}
                  >
                    View
                  </button>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleDownloadInvoice(invoice.invoiceId)}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Invoice Detail Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Invoice Details</h2>
            <p><strong>Invoice ID:</strong> {selectedInvoice.invoiceId}</p>
            <p><strong>Guest Name:</strong> {selectedInvoice.guestName}</p>
            <p><strong>Room Number:</strong> {selectedInvoice.roomNumber}</p>
            <p><strong>Total Amount:</strong> ${selectedInvoice.totalAmount}</p>
            <p><strong>Status:</strong> {selectedInvoice.status}</p>
            <p><strong>Date:</strong> {selectedInvoice.date}</p>
            <div className="mt-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded-lg"
                onClick={() => setSelectedInvoice(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
