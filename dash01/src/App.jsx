import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages
import ChooseLogin from "./pages/ChooseLogin";
import LoginForm from "./pages/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import DonorDashboard from "./pages/DonorDashboard";
import Students from "./pages/Students";
import Donors from "./pages/Donors";
import About from "./pages/About";
import Donate from "./pages/Donors";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<ChooseLogin />} />
          {/* Role-based login/register form */}
          <Route path="/login/:role" element={<LoginForm />} />

          {/* Dashboards */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/donor-dashboard" element={<DonorDashboard />} />

          {/* Other pages */}
          <Route path="/students" element={<Students />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />

          {/* Fallback 404 */}
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl mt-20">404 - Page Not Found</h1>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
