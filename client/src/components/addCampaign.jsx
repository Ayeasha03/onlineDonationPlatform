import React, { useState } from 'react';

const AddCampaign = ({ onCampaignAdded }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/campaigns', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, type, amount }),
    })
      .then((res) => res.json())
      .then((data) => {
        setSuccessMessage('🎉 Campaign successfully added!');
        if (onCampaignAdded) onCampaignAdded(data);

        // clear form
        setTitle('');
        setType('');
        setAmount('');

        // clear message after 3 seconds
        setTimeout(() => setSuccessMessage(''), 3000);
      })
      .catch((err) => console.error('Error adding campaign:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-indigo-700">Add New Campaign</h2>

      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 border border-green-300 text-green-800 rounded">
          {successMessage}
        </div>
      )}

      <input
        className="w-full mb-3 p-2 border rounded"
        type="text"
        placeholder="Campaign Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        type="text"
        placeholder="Category (e.g. Health)"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      />
      <input
        className="w-full mb-3 p-2 border rounded"
        type="number"
        placeholder="Target Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
        Add Campaign
      </button>
    </form>
  );
};

export default AddCampaign;
