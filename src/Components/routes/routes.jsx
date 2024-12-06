import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard'; // Your Dashboard component
// Import other pages here when ready

const RoutesPage = () => {
  return (
    <Routes>
      
      <Route path="/dashboard" element={<Dashboard />} />
   
    </Routes>
  );
};

export default RoutesPage;
