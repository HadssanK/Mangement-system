import { Line, Bar } from 'react-chartjs-2';
import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(
  CategoryScale,  // For x-axis
  LinearScale,    // For y-axis
  BarElement,     // For Bar chart rendering
  PointElement,   // For handling points (important for Line chart rendering)
  LineElement,    // For Line chart rendering
  Title,          // For chart title
  Tooltip,        // For tooltip functionality
  Legend          // For displaying chart legends
);

// Dummy Data for Reports
const revenueData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue ($)',
      data: [12000, 14000, 16000, 18000, 20000, 22000],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const occupancyData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Occupancy Rate (%)',
      data: [70, 75, 80, 85, 90, 95],
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const Reports = () => {
  const [reportType, setReportType] = useState('revenue');
  const [dateRange, setDateRange] = useState('last-month');

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  const handleDateRangeChange = (e) => {
    setDateRange(e.target.value);
  };

  return (
    <div className="p-6 space-y-6 max-w-full overflow-x-hidden">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Reports</h1>

      {/* Report Type Selector */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={handleReportChange}
          value="revenue"
          className={`py-2 px-4 rounded-lg ${reportType === 'revenue' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Revenue
        </button>
        <button
          onClick={handleReportChange}
          value="occupancy"
          className={`py-2 px-4 rounded-lg ${reportType === 'occupancy' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Occupancy
        </button>
        <button
          onClick={handleReportChange}
          value="feedback"
          className={`py-2 px-4 rounded-lg ${reportType === 'feedback' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          Customer Feedback
        </button>
      </div>

      {/* Date Range Selector */}
      <div className="flex space-x-4 mb-6">
        <select
          value={dateRange}
          onChange={handleDateRangeChange}
          className="bg-white border rounded-lg p-2"
        >
          <option value="last-month">Last Month</option>
          <option value="last-quarter">Last Quarter</option>
          <option value="last-year">Last Year</option>
          <option value="custom">Custom Range</option>
        </select>
      </div>

      {/* Report Display */}
      {reportType === 'revenue' && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Revenue Report</h2>
          <Line data={revenueData} />
        </div>
      )}

      {reportType === 'occupancy' && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Occupancy Report</h2>
          <Bar data={occupancyData} />
        </div>
      )}

      {reportType === 'feedback' && (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Feedback</h2>
          {/* Placeholder for feedback data */}
          <p className="text-gray-600">Customer feedback summary and analysis will go here.</p>
        </div>
      )}

      {/* Downloadable Report */}
      <div className="mt-6">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg">Download Report</button>
      </div>
    </div>
  );
};

export default Reports;
