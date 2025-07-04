import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Home from './pages/HomePage';
import ChatbotSignup from './pages/ChatbotSignup';
import HeroSection from './components/HeroSection';
import BookPooja from './components/ListingPooja';
import BookForm from './components/BookForm';
import LoginPage from './components/LoginPage';
import Services from './components/Services';
import apiUrls from './utils/apiUrls';

// Admin Pages
import AdminDashboard from './components/admin/AdminDashboard';
import ManagePujas from './components/admin/ManagePujas';
import Bookings from './components/admin/Bookings';
import Users from './components/admin/Users';
import Feedback from './components/admin/Feedback';


// User Pages
import UserDashboard from './components/User/UserDashboard';
import MyBookings from './components/User/MyBookings';
import Profile from './components/User/Profile';
import UserSidebar from './components/User/UserSidebar';  // ✅ sidebar

// 🟨 Layout for all user routes with sidebar
const UserLayout = ({ Component }) => (
  <div className="d-flex">
    <UserSidebar />
    <div className="flex-grow-1 p-3">
      <Component />
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<ChatbotSignup />} />
        <Route path="/hero" element={<HeroSection />} />
        <Route path="/book-pooja" element={<BookPooja />} />
        <Route path="/book-form" element={<BookForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/services" element={<Services />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/manage-pujas" element={<ManagePujas />} />
        <Route path="/admin/bookings" element={<Bookings />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/feedback" element={<Feedback />} />

        {/* ✅ User Routes with Sidebar Layout */}
        <Route path="/user/dashboard" element={<UserLayout Component={UserDashboard} />} />
        <Route path="/user/bookings" element={<UserLayout Component={MyBookings} />} />
        <Route path="/user/profile" element={<UserLayout Component={Profile} />} />

        {/* Redirect /user → /user/dashboard */}
        <Route path="/user" element={<Navigate to="/user/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
