import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">Huda Ayaz's Portfolio</Link>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/skill-details" className="text-white">Skill Details</Link>
          <Link to="/project-showcase" className="text-white">Project Showcase</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
