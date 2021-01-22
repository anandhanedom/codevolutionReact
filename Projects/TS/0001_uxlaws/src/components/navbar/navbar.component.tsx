import React from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';

interface IProps {
  toggleNav: () => void;
}

const Navbar: React.FC<IProps> = ({ toggleNav }) => {
  return (
    <nav className="flex justify-between p-4 uppercase bg-black text-white font-medium items-center tracking-widest fixed top-0 w-full">
      <div>
        <Link to="/">Laws of UX</Link>
      </div>
      <button
        type="button"
        className="menuBtn flex border border-white px-3 py-2 uppercase font-medium"
        onClick={toggleNav}
      >
        <span className="mr-2">Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          width="20px"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
