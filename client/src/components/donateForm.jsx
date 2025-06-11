// DonateForm.jsx
import { useState } from 'react';

export default function DonateForm({ onDonate }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(amount);
    if (!isNaN(value) && value > 0) {
      onDonate(value);
      setAmount('');
    } else {
      alert('Please enter a valid amount');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter donation amount"
        className="border p-2 rounded w-2/3 mr-2"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Donate
      </button>
    </form>
  );
}
