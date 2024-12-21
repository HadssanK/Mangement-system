import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';
import RoomInventory from '../../pages/Room-inventory';
import RoomStatus from '../../pages/Room-status';
import RoomBooking from '../../pages/Room-booking';
import CheckIn from '../../pages/Check-in';
import CheckOut from '../../pages/Check-out';
import GenerateBill from '../../pages/Generate-bill';
import Invoices from '../../pages/Invoices';
import Housekeeping from '../../pages/Housekeeping';
import Maintenance from '../../pages/Maintenance';
import Reports from '../../pages/Reports';
import FeedbackPage from '../../pages/Feedback';
import UserProfile from '../../pages/User-Profile';
import ReplyQueries from '../../pages/Reply-queries';

const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Dashboard" />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/RoomInventory" element={<RoomInventory />} />
      <Route path="/RoomStatus" element={<RoomStatus />} />
      <Route path="/RoomBooking" element={<RoomBooking />} />
      <Route path="/Check-in" element={<CheckIn />} />
      <Route path="/Check-out" element={<CheckOut />} />
      <Route path="/Generate-bill" element={<GenerateBill />} />
      <Route path="/Invoices" element={<Invoices />} />
      <Route path="/Housekeeping" element={<Housekeeping />} />
      <Route path="/Maintenance" element={<Maintenance />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Feedback" element={<FeedbackPage />} />
      <Route path="/User-Profile" element={<UserProfile />} />
      <Route path="/Reply-queries" element={<ReplyQueries />} />
    </Routes>
  );
};

export default RoutesPage;
