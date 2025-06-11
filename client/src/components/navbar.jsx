import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-700 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Fundraising Portal</h1>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#campaign" className="hover:underline">Campaigns</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
