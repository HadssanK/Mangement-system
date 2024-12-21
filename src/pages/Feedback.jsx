import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FeedbackPage = () => {
  // Sample feedback data (replace this with your API call to get actual data)
  const feedbackData = [
    { rating: 5, comment: "Great service!", customer: "Hassan" },
    { rating: 4, comment: "Good, but could be faster.", customer: "Mudassir" },
    { rating: 1, comment: "Very disappointed with the product.", customer: "Daniyal" },
    { rating: 5, comment: "Amazing experience!", customer: "Hamza" },
    { rating: 3, comment: "Average, nothing special.", customer: "Kumail" },

  ];

  // Calculate rating distribution
  const ratingDistribution = [0, 0, 0, 0, 0]; // Ratings 1-5
  feedbackData.forEach(feedback => {
    ratingDistribution[feedback.rating - 1]++;
  });

  // Bar chart data
  const ratingChartData = {
    labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
    datasets: [
      {
        label: 'Customer Ratings',
        data: ratingDistribution,
        backgroundColor: 'rgba(54, 162, 235, 0.4)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Feedback summary (can be based on ratings, comments, etc.)
  const feedbackSummary = {
    positive: feedbackData.filter(item => item.rating >= 4).length,
    neutral: feedbackData.filter(item => item.rating === 3).length,
    negative: feedbackData.filter(item => item.rating <= 2).length,
  };

  return (
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 min-h-screen p-8">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Customer Feedback</h1>

        {/* Feedback Rating Distribution - Bar Chart */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customer Rating Distribution</h3>
          <Bar data={ratingChartData} />
        </div>

        {/* Feedback Comments */}
        <div className="mb-8 space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Customer Comments</h3>
          <div className="space-y-4">
            {feedbackData.map((feedback, index) => (
              <div key={index} className="bg-gray-50 p-4 border-2 border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 transition duration-300">
                <p className="text-xl font-medium text-gray-800">Customer: <span className="font-normal">{feedback.customer}</span></p>
                <p className="text-lg text-gray-600">Rating: <span className={`font-semibold ${feedback.rating >= 4 ? 'text-green-600' : feedback.rating === 3 ? 'text-yellow-600' : 'text-red-600'}`}>{feedback.rating} Stars</span></p>
                <p className="text-md text-gray-500 mt-2">Comment: <span className="italic">{feedback.comment}</span></p>
              </div>
            ))}
          </div>
        </div>

        {/* Feedback Summary */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Feedback Summary</h3>
          <div className="space-y-4">
            <p className="text-lg text-green-600">Positive Feedback: {feedbackSummary.positive} feedbacks</p>
            <p className="text-lg text-yellow-600">Neutral Feedback: {feedbackSummary.neutral} feedbacks</p>
            <p className="text-lg text-red-600">Negative Feedback: {feedbackSummary.negative} feedbacks</p>
          </div>
        </div>

        {/* Button to Download Report */}
        <div className="text-center">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-600 focus:outline-none transition duration-300">
            Download Feedback Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
