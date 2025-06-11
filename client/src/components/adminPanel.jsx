import React, { useState } from 'react';

const AdminPanel = ({ donationHistory, campaigns, onEdit, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEditing = (campaign) => {
    setEditingId(campaign.id);
    setEditData({ ...campaign });
  };

  const handleSave = () => {
    onEdit(editData);
    setEditingId(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800">Admin Panel</h2>

      {/* === Manage Campaigns Section === */}
      <h3 className="text-xl font-semibold mb-4">Campaigns</h3>
      <ul className="space-y-4 mb-8">
        {campaigns.map((campaign) => (
          <li key={campaign.id} className="border rounded p-4 bg-white shadow-sm">
            {editingId === campaign.id ? (
              <>
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border"
                  value={editData.title}
                  onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                  placeholder="Title"
                />
                <input
                  type="text"
                  className="block w-full mb-2 p-2 border"
                  value={editData.type}
                  onChange={(e) => setEditData({ ...editData, type: e.target.value })}
                  placeholder="Type"
                />
                <input
                  type="number"
                  className="block w-full mb-2 p-2 border"
                  value={editData.amount}
                  onChange={(e) => setEditData({ ...editData, amount: Number(e.target.value) })}
                  placeholder="Amount"
                />
                <div className="flex gap-2">
                  <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleSave}>Save</button>
                  <button className="bg-gray-500 text-white px-3 py-1 rounded" onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <p className="font-semibold">{campaign.title}</p>
                <p className="text-sm text-gray-600">Type: {campaign.type} | Amount: ${campaign.amount}</p>
                <div className="flex gap-2 mt-2">
                  <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => startEditing(campaign)}>Edit</button>
                  <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => onDelete(campaign.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* === Donation History Section === */}
      <h3 className="text-xl font-semibold mb-2">Donation History</h3>
      {donationHistory.length === 0 ? (
        <p className="text-gray-600">No donations yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border">Campaign</th>
                <th className="px-4 py-2 border">Amount</th>
                <th className="px-4 py-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {donationHistory.map((donation) => (
                <tr key={donation.id} className="border-t">
                  <td className="px-4 py-2 border">{donation.campaignTitle}</td>
                  <td className="px-4 py-2 border">${donation.amount.toFixed(2)}</td>
                  <td className="px-4 py-2 border">{donation.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
