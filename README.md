# 🎁 Online Donation Platform

A modern and responsive web app built with **React** and **Tailwind CSS**, allowing charities to list donation campaigns and receive support from users. The platform includes an **admin panel** for managing campaigns and viewing donation history. No real payment gateway is used — it's a simulated donation system ideal for learning and demonstrations.

---

## 🚀 Features

- 📝 Create and list donation campaigns
- 💳 Simulate donations (with thank-you alerts)
- 📊 Real-time progress bars showing how much has been raised
- 👩‍💼 Admin panel to:
  - Edit and delete campaigns
  - View full donation history

---

## 🛠️ Tech Stack

- **React** – for building the user interface
- **Tailwind CSS** – for fast and responsive styling
- **JSON Server** – to simulate a backend (REST API)
- **JavaScript (ES6)**

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/online-donation-platform.git
cd online-donation-platform
2. Install dependencies
bash
Copy
Edit
npm install
3. Run JSON Server (mock backend)
bash
Copy
Edit
npx json-server --watch db.json --port 5000
4. Start the React development server
bash
Copy
Edit
npm start
📁 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── AddCampaign.jsx
│   ├── CampaignList.jsx
│   ├── CampaignDetails.jsx
│   ├── AdminPanel.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
├── App.jsx
└── index.js
💡 Use Cases
Perfect for learning how React handles state, props, and component structure

A great starting point for building real-world fundraising or campaign platforms

Can be extended to include real payment integration like Stripe or Paystack

📄 License
This project is free and open-source. Use it for learning or modify it for your needs!

✨ Author
Made with ❤️ by [Your Name]

yaml
Copy
Edit

---

Would you like me to include a sample `db.json` file too, so everything works out of the box?
