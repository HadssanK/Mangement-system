import React, { useState } from "react";

// Dummy Maintenance Data
const maintenanceData = [
  {
    roomNumber: "101",
    issue: "Broken AC",
    priority: "High",
    status: "Pending",
    reportedBy: "John Doe",
    assignedTo: "Mike",
    dateReported: "2024-12-16",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCpvrNsF3HovN1wJT3K8WSqbPCBH9CRkoOxQ&s",
  },
  {
    roomNumber: "102",
    issue: "Leaky Faucet",
    priority: "Medium",
    status: "In Progress",
    reportedBy: "Jane Smith",
    assignedTo: "Sarah",
    dateReported: "2024-12-17",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYvT56OC2-_nFU74uYhA-mv6hxxmwuDl7WrQ&s",
  },
  {
    roomNumber: "103",
    issue: "TV Not Working",
    priority: "Low",
    status: "Resolved",
    reportedBy: "Alice Brown",
    assignedTo: "Mike",
    dateReported: "2024-12-18",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2G_pKicutJS1Nis2c6xwXULRfw-gEGmlxMQ&s",
  },
];

const maintenanceStaff = [
  { name: "Hamza" },
  { name: "Kumail" },
  { name: "danyal" },
];

const Maintenance = () => {
  const [requests, setRequests] = useState(maintenanceData);

  // Update the status of the maintenance request (e.g., Pending, In Progress, Resolved)
  const handleUpdateStatus = (roomNumber, newStatus) => {
    setRequests(
      requests.map((request) =>
        request.roomNumber === roomNumber
          ? { ...request, status: newStatus }
          : request
      )
    );
  };

  // Assign maintenance staff to a request
  const handleAssignStaff = (roomNumber, staffName) => {
    setRequests(
      requests.map((request) =>
        request.roomNumber === roomNumber
          ? { ...request, assignedTo: staffName }
          : request
      )
    );
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">
        Maintenance Management
      </h1>

      {/* Maintenance Requests List */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Maintenance Requests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests.map((request, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 sm:p-6"
            >
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Room {request.roomNumber}
              </h3>
              <p className="text-gray-600 mt-2">Issue: {request.issue}</p>
              <p className="text-gray-600 mt-2">Priority: {request.priority}</p>
              <p className="text-gray-600 mt-2">
                Reported By: {request.reportedBy}
              </p>
              <p className="text-gray-600 mt-2">
                Date Reported: {request.dateReported}
              </p>
              <p className="text-gray-600 mt-2">
                Assigned To: {request.assignedTo}
              </p>

              {/* Maintenance Image */}
              {request.image && (
                <div className="mt-4">
                  <img
                    src={request.image}
                    alt={`Room ${request.roomNumber} Issue`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-center text-gray-600 mt-2">Issue Image</p>
                </div>
              )}

              {/* Task Status Update */}
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg"
                  onClick={() =>
                    handleUpdateStatus(request.roomNumber, "Resolved")
                  }
                >
                  Mark as Resolved
                </button>
                <button
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
                  onClick={() =>
                    handleUpdateStatus(request.roomNumber, "In Progress")
                  }
                >
                  In Progress
                </button>
                <button
                  className="bg-gray-500 text-white py-2 px-4 mt-2 rounded-lg"
                  onClick={() =>
                    handleUpdateStatus(request.roomNumber, "Pending")
                  }
                >
                  Mark as Pending
                </button>
              </div>

              {/* Assign Staff */}
              <div className="mt-4">
                <label htmlFor="staffSelect" className="text-gray-700">
                  Assign Staff:
                </label>
                <select
                  id="staffSelect"
                  className="bg-white border rounded-lg p-2"
                  onChange={(e) =>
                    handleAssignStaff(request.roomNumber, e.target.value)
                  }
                  value={request.assignedTo}
                >
                  {maintenanceStaff.map((staff, index) => (
                    <option key={index} value={staff.name}>
                      {staff.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance History */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Maintenance History
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {requests
            .filter((request) => request.status === "Resolved")
            .map((request, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-4 sm:p-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  Room {request.roomNumber}
                </h3>
                <p className="text-gray-600 mt-2">Issue: {request.issue}</p>
                <p className="text-gray-600 mt-2">
                  Priority: {request.priority}
                </p>
                <p className="text-gray-600 mt-2">
                  Assigned To: {request.assignedTo}
                </p>
                <p className="text-gray-600 mt-2">
                  Date Reported: {request.dateReported}
                </p>
                <p className="text-gray-600 mt-2">Status: {request.status}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
