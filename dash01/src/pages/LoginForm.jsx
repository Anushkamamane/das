import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function LoginForm() {
  const { role, type } = useParams(); // role = donor/receiver, type = organisation/individual (if donor)

  const [orgName, setOrgName] = useState('');
  const [fullName, setFullName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary mock redirect
    if (role?.toLowerCase() === 'donor') {
      navigate('/donor-dashboard');
    } else if (role?.toLowerCase() === 'receiver') {
      navigate('/receiver-dashboard');
    }
  };

  const renderDonorExtraField = () => {
    if (role?.toLowerCase() === 'donor' && type === 'organisation') {
      return (
        <div>
          <label className="block font-medium text-teal-800 mb-2">Organisation Name</label>
          <input
            type="text"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your organisation name"
            required
          />
        </div>
      );
    }
    if (role?.toLowerCase() === 'donor' && type === 'individual') {
      return (
        <div>
          <label className="block font-medium text-teal-800 mb-2">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your full name"
            required
          />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-gradient-to-b from-teal-50 to-teal-100">
      <Header />

      {/* Page Hero */}
      <section className="w-full bg-gradient-to-r from-teal-100 to-teal-200 py-12 text-center shadow-inner">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-900 capitalize">
          {role} {type ? `${type}` : ''} Login
        </h1>
        <p className="mt-3 text-lg text-teal-700">
          Securely login to continue your journey
        </p>
      </section>

      {/* Form */}
      <main className="flex-grow flex items-center justify-center px-4 py-16">
        <div className="bg-white w-full max-w-lg p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition">
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderDonorExtraField()}

            {/* Common Fields */}
            <div>
              <label className="block font-medium text-teal-800 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-teal-800 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-teal-800 mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-teal-800 mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>

            <div>
              <label className="block font-medium text-teal-800 mb-2">Address</label>
              <textarea
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-xl shadow-md hover:bg-teal-700 transform transition hover:scale-105"
            >
              Login
            </button>
          </form>

          <p className="mt-8 text-center text-gray-700">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-teal-600 font-semibold hover:underline">
              Register here
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
