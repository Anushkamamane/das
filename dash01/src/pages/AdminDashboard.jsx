import React, { useState } from "react";

const categories = {
  Stationary: ["Pen", "Pencil", "Books", "Xth Books", "Notebook"],
  Clothing: ["Bottomwear", "Sweater", "Footwear"],
};

export default function Donate() {
  // Sample donor data
  const [donors, setDonors] = useState([
    { name: "Shreya", category: "Stationary", type: "Books", quantity: 5 },
    { name: "Tanmay", category: "Clothing", type: "Sweater", quantity: 2 },
    { name: "Anushka", category: "Stationary", type: "Notebook", quantity: 10 },
  ]);

  // Function to remove a donor
  const handleRemove = (index) => {
    const updatedDonors = donors.filter((_, i) => i !== index);
    setDonors(updatedDonors);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Donor List
      </h1>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {donors.length > 0 ? (
          donors.map((donor, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <div>
                <h2 className="font-semibold text-lg">{donor.name}</h2>
                <p className="text-sm text-gray-600">
                  {donor.category} - {donor.type} (Qty: {donor.quantity})
                </p>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No donors available</p>
        )}
      </div>
    </div>
  );
}
