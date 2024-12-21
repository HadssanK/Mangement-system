import React, { useState } from 'react';

const ReplyQueries = () => {
  // Sample feedbacks data (replace with real data from API)
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      user: 'Hassan',
      email: 'Hassan@example.com',
      query: 'Great service, very satisfied!',
      reply: '',
    },
    {
      id: 2,
      user: 'Mudassir',
      email: 'Mudassir@example.com',
      query: 'Room cleanliness could be improved.',
      reply: '',
    },
  ]);

  // Function to handle replying to feedback
  const handleReplyChange = (id, reply) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.map((feedback) =>
        feedback.id === id ? { ...feedback, reply } : feedback
      )
    );
  };

  // Function to handle deleting feedback
  const handleDeleteFeedback = (id) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.filter((feedback) => feedback.id !== id)
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Feedback Queries</h2>
      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-semibold">{feedback.user}</h3>
                <p className="text-sm text-gray-600">{feedback.email}</p>
              </div>
              <button
                onClick={() => handleDeleteFeedback(feedback.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-800">Query:</p>
              <p className="text-gray-700">{feedback.query}</p>
            </div>

            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-800">Reply:</p>
              <textarea
                value={feedback.reply}
                onChange={(e) => handleReplyChange(feedback.id, e.target.value)}
                className="w-full p-2 bg-gray-100 rounded-md"
                placeholder="Write your reply here..."
                rows="3"
              />
            </div>

            {feedback.reply && (
              <div className="mt-4">
                <p className="text-lg font-semibold text-gray-800">Admin Reply:</p>
                <p className="text-gray-700">{feedback.reply}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReplyQueries;
