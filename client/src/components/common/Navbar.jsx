import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Campus Compass</Link>
        <div className="space-x-4">
          <Link to="/opportunities" className="hover:text-gray-300">Opportunities</Link>
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/signup" className="bg-blue-500 px-3 py-2 rounded hover:bg-blue-600">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;