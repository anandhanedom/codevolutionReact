/* eslint-disable react/self-closing-comp */
import React from 'react';
import './navbar.styles.css';
import { Link } from 'react-router-dom';

interface IProps {
  toggleNav: () => void;
  articleNav: boolean;
}

const Navbar: React.FC<IProps> = ({ toggleNav, articleNav }) => {
  return (
    <nav
      className={`${
        articleNav ? 'bg-transparent' : 'bg-black'
      } flex justify-between p-4 uppercase text-white font-medium items-center tracking-widest fixed top-0 w-full text-base`}
    >
      <div>
        <Link to="/">Laws of UX</Link>
      </div>
      {articleNav ? (
        <div className="uppercase md:block hidden">
          <Link to="/articles/1">Prev</Link>
          <span
            style={{
              height: '1px',
              backgroundColor: '#f4f1d0',
            }}
            className="mx-8 inline-block w-6 align-middle"
          ></span>
          <Link to="/articles/2">Next</Link>
        </div>
      ) : null}
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
          width="23px"
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
