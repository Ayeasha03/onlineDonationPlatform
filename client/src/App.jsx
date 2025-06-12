import React, { useState, useEffect } from 'react';
import AddCampaign from './components/addCampaign';
import CampaignList from './components/campaignList';
import CampaignDetails from './components/campaignDetails';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import AdminPanel from './components/adminPanel';

const App = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [donations, setDonations] = useState({});

  useEffect(() => {
    fetch('https://onlinedonationplatform.onrender.com/campaigns')
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((err) => console.error('Error fetching campaigns:', err));
  }, []);

  const handleCampaignAdded = (newCampaign) => {
    setCampaigns([...campaigns, newCampaign]);
  };

  const handleDonate = (campaignId, amount) => {
    setDonations((prev) => ({
      ...prev,
      [campaignId]: (prev[campaignId] || 0) + amount,
    }));
  };

  const handleCloseDetails = () => {
    setSelectedCampaign(null);
  };

  const handleEditCampaign = (updatedCampaign) => {
    fetch(`https://onlinedonationplatform.onrender.com/campaigns/${updatedCampaign.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        setCampaigns((prev) =>
          prev.map((camp) => (camp.id === data.id ? data : camp))
        );
      })
      .catch((err) => console.error('Error updating campaign:', err));
  };

  const handleDeleteCampaign = (id) => {
    fetch(`https://onlinedonationplatform.onrender.com/campaigns/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setCampaigns((prev) => prev.filter((camp) => camp.id !== id));
      })
      .catch((err) => console.error('Error deleting campaign:', err));
  };

  const dummyDonationHistory = [
    { id: 1, campaignTitle: 'Clean Water Project', amount: 50, date: '2025-06-01' },
    { id: 2, campaignTitle: 'Education for Girls', amount: 75, date: '2025-06-05' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Home />
        <h2 className="text-2xl font-bold text-indigo-800 my-6 text-center">
          Start or Support a Campaign
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AddCampaign onCampaignAdded={handleCampaignAdded} />
          <CampaignList campaigns={campaigns} onSelectCampaign={setSelectedCampaign} />
        </div>
      </div>

      {selectedCampaign && (
        <CampaignDetails
          campaign={selectedCampaign}
          onClose={handleCloseDetails}
          onDonate={handleDonate}
          donatedAmount={donations[selectedCampaign.id] || 0}
        />
      )}

      <div className="p-6">
        <AdminPanel
          campaigns={campaigns}
          donationHistory={dummyDonationHistory}
          onEdit={handleEditCampaign}
          onDelete={handleDeleteCampaign}
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;
