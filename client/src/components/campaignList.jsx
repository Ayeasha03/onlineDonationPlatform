import React, { useState } from 'react';
import CampaignDetails from './campaignDetails';

const CampaignList = ({ campaigns, onSelectCampaign }) => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const handleSelect = (campaign) => {
    setSelectedCampaign(campaign);
    if (onSelectCampaign) onSelectCampaign(campaign); // notify parent
  };

  return (
    <div id='campaign' className="p-4 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Fundraising Campaigns</h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition cursor-pointer"
            onClick={() => handleSelect(campaign)}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{campaign.title}</h3>
            <p className="text-gray-600"><strong>Category:</strong> {campaign.type}</p>
            <p className="text-gray-600"><strong>Target:</strong> ${Number(campaign.amount).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <CampaignDetails campaign={selectedCampaign} onClose={() => setSelectedCampaign(null)} />
    </div>
  );
};

export default CampaignList;
