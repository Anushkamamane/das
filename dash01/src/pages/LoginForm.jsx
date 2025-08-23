import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginForm() {
  const { role } = useParams(); // admin, student, user
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic mock redirect
    if (role === 'admin') navigate('/admin-dashboard');
    else if (role === 'student') navigate('/student-dashboard');
    else if (role === 'user') navigate('/user-dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-teal-50">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-gray-200">
          <h1 className="text-3xl font-bold text-teal-900 mb-8 text-center capitalize">{role} Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-xl shadow-lg hover:bg-teal-700 transform transition hover:scale-105"
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
