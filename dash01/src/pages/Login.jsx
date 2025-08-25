import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role');
      return;
    }
    if (role === 'admin') navigate('/admin-dashboard');
    else if (role === 'student') navigate('/student-dashboard');
    else if (role === 'user') navigate('/user-dashboard');
    else alert('Invalid role');
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-teal-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-3xl font-bold text-teal-900 mb-8 text-center">Login / Register</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="role" className="block font-medium text-gray-700 mb-2">
                Select Role:
              </label>
              <select
                id="role"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">--Choose Role--</option>
                <option value="admin">Admin</option>
                <option value="student">receiver</option>
                <option value="user">Donor</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700 mb-2">
                Password:
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-3 rounded-xl font-semibold shadow hover:bg-teal-700 transform transition hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-gray-700">
            Don't have an account?{' '}
            <a href="#" className="text-teal-600 font-medium hover:underline">
              Register here
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
