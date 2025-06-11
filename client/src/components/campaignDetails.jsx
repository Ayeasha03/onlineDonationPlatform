import React from 'react';
import DonateForm from './DonateForm';

const CampaignDetails = ({ campaign, onClose, onDonate, donatedAmount }) => {
  if (!campaign) return null;

  const handleDonate = (amount) => {
    onDonate(campaign.id, amount); // Parent will handle updating donatedAmount
  };

  const progress = Math.min((donatedAmount / campaign.amount) * 100, 100);
  const goalReached = donatedAmount >= campaign.amount;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-2">{campaign.title}</h2>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {campaign.type}
        </p>
        <p className="text-gray-600 mb-2">
          <strong>Target:</strong> ${campaign.amount.toLocaleString()}
        </p>
        <p className="text-gray-600 mb-2">
  <strong>Amount Donated:</strong> ${Number(donatedAmount || 0).toFixed(2)}
</p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
          <div
            className="bg-indigo-600 h-4 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* 🎉 Goal Reached Message */}
        {goalReached && (
          <p className="text-green-600 font-semibold text-sm mb-2">
            🎉 Goal Reached!
          </p>
        )}

        <DonateForm onDonate={handleDonate} />

        <p className="text-gray-600 mt-4">More details coming soon...</p>
        <button
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails;
