import React from 'react';
import './navbar.styles.css';

const Navbar: React.FC = () => {
  const hello = () => {
    console.log('hello');
  };

  return (
    <nav className="flex justify-between p-4 uppercase bg-black text-white font-medium items-center tracking-widest fixed top-0 w-full">
      <div>Laws of UX</div>
      <button
        type="button"
        className="menuBtn flex border border-white px-3 py-2 uppercase font-medium"
        onClick={hello}
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
