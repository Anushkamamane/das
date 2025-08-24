import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import ChooseLogin from './pages/ChooseLogin';
import LoginForm from './pages/LoginForm';
import AdminDashboard from './pages/AdminDashboard';
import StudentDashboard from './pages/StudentDashboard';
import UserDashboard from './pages/DonorDashboard';
import About from './pages/About';
import Donate from "./pages/Donate";
// Header always visible
import Header from './components/Header';

export default function App() {
  return (
    <Router>
      <Header />
      {/* Add padding top to offset fixed header height */}
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ChooseLogin />} />
          <Route path="/login/:role" element={<LoginForm />} />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}
