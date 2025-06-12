const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Sample campaigns (you can replace this with real data or database later)
const campaigns = [
  { id: 1, title: 'School Fund', type: 'Education', amount: 5000 },
  { id: 2, title: 'Water Project', type: 'Health', amount: 7000 },
  { id: 3, title: 'Food for Orphans', type: 'Charity', amount: 4000 },
  { id: 4, title: 'Girl Coding Camp', type: 'Education', amount: 6500 },
  { id: 5, title: 'Youth Empowerment', type: 'Entrepreneurship', amount: 8000 },
];


app.get('/campaigns', (req, res) => {
  res.json(campaigns);
});

app.post('/campaigns', (req, res) => {
  const { title, type, amount } = req.body;
  const newCampaign = {
    id: campaigns.length + 1,
    title,
    type,
    amount: Number(amount),
  };
  campaigns.push(newCampaign);
  res.status(201).json(newCampaign);
});
// Update campaign (PUT)
app.put('/campaigns/:id', (req, res) => {
  const campaignId = parseInt(req.params.id);
  const { title, type, amount } = req.body;

  const index = campaigns.findIndex((c) => c.id === campaignId);
  if (index === -1) {
    return res.status(404).json({ error: 'Campaign not found' });
  }

  campaigns[index] = {
    ...campaigns[index],
    title,
    type,
    amount: Number(amount),
  };

  res.json(campaigns[index]);
});

// Delete campaign (DELETE)
app.delete('/campaigns/:id', (req, res) => {
  const campaignId = parseInt(req.params.id);

  const index = campaigns.findIndex((c) => c.id === campaignId);
  if (index === -1) {
    return res.status(404).json({ error: 'Campaign not found' });
  }

  const deleted = campaigns.splice(index, 1);
  res.json({ message: 'Campaign deleted', campaign: deleted[0] });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
