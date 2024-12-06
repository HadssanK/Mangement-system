import React from 'react';

// Dummy Data for the Dashboard
const donationsData = [
  { cause: 'Children Welfare', amount: 5000, img: 'https://via.placeholder.com/150/FF5733' },
  { cause: 'Education', amount: 2000, img: 'https://via.placeholder.com/150/33FF57' },
  { cause: 'Healthcare', amount: 3000, img: 'https://via.placeholder.com/150/3357FF' },
];

const programsData = [
  { name: 'Healthcare Program', date: '2024-12-10', img: 'https://via.placeholder.com/150/FF33A1' },
  { name: 'Children Education Program', date: '2024-12-15', img: 'https://via.placeholder.com/150/33A1FF' },
];

const usersData = [
  { name: 'John Doe', email: 'john.doe@example.com', img: 'https://via.placeholder.com/100' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', img: 'https://via.placeholder.com/100' },
];

const partnersData = [
  { name: 'Company A', logo: 'https://via.placeholder.com/50' },
  { name: 'Company B', logo: 'https://via.placeholder.com/50' },
];

const queriesData = [
  { user: 'John Doe', query: 'How can I donate?', status: 'Pending', img: 'https://via.placeholder.com/100' },
  { user: 'Jane Smith', query: 'Where can I see upcoming programs?', status: 'Resolved', img: 'https://via.placeholder.com/100' },
];

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Admin Dashboard</h1>

      {/* Manage Donations Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Donations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {donationsData.map((donation, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
              <img src={donation.img} alt={donation.cause} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{donation.cause}</h3>
              <p className="text-gray-600 mt-2">Amount Donated: ${donation.amount}</p>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Remove</button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manage Programs Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((program, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
              <img src={program.img} alt={program.name} className="w-full h-40 object-cover rounded-t-lg" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{program.name}</h3>
              <p className="text-gray-600 mt-2">Date: {program.date}</p>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Edit</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manage Users Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Users</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usersData.map((user, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
              <img src={user.img} alt={user.name} className="w-24 h-24 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">{user.name}</h3>
              <p className="text-gray-600 mt-2 text-center">{user.email}</p>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg">View</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manage Partners Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Manage Partners</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnersData.map((partner, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
              <img src={partner.logo} alt={partner.name} className="w-16 h-16 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 text-center mt-4">{partner.name}</h3>
              <div className="mt-4 text-center">
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Remove</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Manage Queries Section */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reply Queries</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {queriesData.map((query, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4 sm:p-6">
              <img src={query.img} alt={query.user} className="w-24 h-24 object-cover rounded-full mx-auto" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{query.user}</h3>
              <p className="text-gray-600 mt-2">Query: {query.query}</p>
              <p className="text-gray-600 mt-2">Status: {query.status}</p>
              <div className="mt-4 flex flex-wrap justify-between items-center">
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Resolve</button>
                <button className="bg-red-500 text-white py-2 px-4 rounded-lg">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
