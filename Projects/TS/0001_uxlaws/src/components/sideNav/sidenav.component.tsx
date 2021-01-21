import React from 'react';
import { Link } from 'react-router-dom';

const SideNav: React.FC = () => {
  return (
    <div className="text-white overflow-hidden h-screen w-screen relative z-10 bg-black">
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
      <Link to="/">Home</Link>
    </div>
  );
};

export default SideNav;
