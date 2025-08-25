
import React, { useState } from "react";

export default function Donate() {
  // Sample donor data (you can fetch this from your backend later)
  const [donors, setDonors] = useState([
    { name: "Shiva tekale", amount: 500 },
    { name: "Tanmay Kalikar", amount: 1000 },
  ]);

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !amount) {
      alert("Please fill out all fields!");
      return;
    }

    // Add new donor to the list
    const newDonor = { name, amount: parseFloat(amount) };
    setDonors([...donors, newDonor]);

    // Reset form
    setName("");
    setEmail("");
    setAmount("");
    alert("Thank you for your donation!");
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center text-teal-700 mb-6">
          Donate to DonorConnect
        </h1>
        <p className="text-center text-lg mb-12">
          Your contributions help us create a bigger impact.  
          Thank you for your generosity!
        </p>

        {/* Total Donors */}
        <div className="bg-teal-700 text-white rounded-2xl shadow-md p-6 mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Total Donors: {donors.length}
          </h2>
          <p className="text-lg">
            Together, we've raised{" "}
            <span className="font-bold">
              ₹{donors.reduce((sum, d) => sum + d.amount, 0)}
            </span>{" "}
            so far!
          </p>
        </div>

        {/* Donors List */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-teal-700">
            Recent Donors
          </h3>
          <div className="bg-white shadow-md rounded-xl p-4">
            {donors.length > 0 ? (
              <ul className="space-y-2">
                {donors.map((donor, index) => (
                  <li
                    key={index}
                    className="flex justify-between border-b pb-2 last:border-none"
                  >
                    <span>{donor.name}</span>
                    <span className="font-semibold text-teal-700">
                      ₹{donor.amount}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No donors yet. Be the first!</p>
            )}
          </div>
        </div>

        {/* Donation Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-teal-700">
            Want to Donate? Fill this Form
          </h3>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-xl p-6 space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Donation Amount (₹)</label>
              <input
                type="number"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-teal-500"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-700 text-white py-2 rounded-lg hover:bg-teal-800 transition"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
