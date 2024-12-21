import React, { useState } from 'react';

const UserProfile = () => {
  // Dummy user data (replace with actual API data if available)
  const userData = [
    {
      id: 1,
      name: 'Kumail',
      email: 'kumail@example.com',
      phone: '+1234567890',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThIY_HP5rzl7Ux5ZgOkt5Wb6pIum7E6S_8g&s',
      feedbacks: [
        { id: 1, message: 'Great service, very satisfied!' },
        { id: 2, message: 'Room cleanliness could be improved.' },
      ],
    },
    {
      id: 2,
      name: 'Daniyal',
      email: 'Daniyal@example.com',
      phone: '+0987654321',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjCtCf5meZLOPCtru0EdOxja2FU80WUxs-w&s',
      feedbacks: [
        { id: 1, message: 'Staff was friendly and helpful.' },
        { id: 2, message: 'Loved the food!' },
      ],
    },
  ];

  // Function to handle deleting feedback
  const handleDeleteFeedback = (userId, feedbackId) => {
    console.log(`Deleting feedback ID ${feedbackId} from user ID ${userId}`);
    // You can replace this with API call to delete feedback
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
      {userData.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <img
              src={user.profileImage}
              alt="User Profile"
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feedback</h3>
            <ul className="space-y-4">
              {user.feedbacks.map((feedback) => (
                <li
                  key={feedback.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition-all duration-200"
                >
                  <p className="text-gray-700">{feedback.message}</p>
                  <button
                    onClick={() => handleDeleteFeedback(user.id, feedback.id)}
                    className="mt-2 text-red-500 hover:text-red-700"
                  >
                    Delete Feedback
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
