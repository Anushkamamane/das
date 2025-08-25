import React, { useState } from "react";

const categories = {
  Stationary: ["Pen", "Pencil", "Books", "Xth Books", "Notebook"],
  Clothing: ["Bottomwear", "Sweater", "Footwear"],
};

export default function ReceiverNeeds() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [needs, setNeeds] = useState([]);

  const handleAddNeed = () => {
    if (!receiverName || !category || !type || !quantity) {
      alert("Please fill all fields!");
      return;
    }

    const newNeed = { receiverName, category, type, quantity, approved: false };
    setNeeds([...needs, newNeed]);
    setReceiverName("");
    setCategory("");
    setType("");
    setQuantity("");
  };

  const handleApprove = (index) => {
    const updatedNeeds = [...needs];
    updatedNeeds[index].approved = !updatedNeeds[index].approved; // Toggle approval
    setNeeds(updatedNeeds);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-teal-700">
          Receiver Needs
        </h1>

        {/* Form */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Receiver Name"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {category && (
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="">Select Type</option>
              {categories[category].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          )}

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />

          <button
            onClick={handleAddNeed}
            className="bg-teal-600 text-white px-5 py-3 rounded-lg hover:bg-teal-700 w-full"
          >
            Add Need
          </button>
        </div>

        {/* List of Needs */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Needs List</h2>
          {needs.length === 0 ? (
            <p className="text-gray-500">No needs added yet.</p>
          ) : (
            <ul className="space-y-3">
              {needs.map((need, index) => (
                <li
                  key={index}
                  className={`flex justify-between items-center p-4 rounded-lg border ${
                    need.approved ? "bg-green-100 border-green-400" : "bg-gray-50"
                  }`}
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {need.receiverName} - {need.category} ({need.type}) x
                      {need.quantity}
                    </p>
                    <p
                      className={`text-sm ${
                        need.approved ? "text-green-700" : "text-red-500"
                      }`}
                    >
                      {need.approved ? "Approved" : "Pending"}
                    </p>
                  </div>
                  <button
                    onClick={() => handleApprove(index)}
                    className={`px-4 py-2 rounded-lg text-white ${
                      need.approved
                        ? "bg-gray-500 hover:bg-gray-600"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {need.approved ? "Undo" : "Approve"}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
