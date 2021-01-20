import React from 'react';
import { Link } from 'react-router-dom';

import './posterBody.styles.css';

interface IProps {
  title: string;
  id: number;
}

const PosterBody: React.FC<IProps> = ({ title, id }) => {
  return (
    <Link
      className={`poster__body text-3xl font-bold ${
        id % 2 === 0 ? 'order-last' : ''
      } flex flex-col`}
      style={{ backgroundColor: '#fff' }}
      // eslint-disable-next-line react/jsx-curly-brace-presence
      to={`/articles/${id}`}
    >
      <div className="flex-1 p-4">{title}</div>
      <div
        className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
        style={{ backgroundColor: '#506485' }}
      >
        <svg viewBox="0 0 566 566" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle
              fillOpacity=".15"
              fill="#000"
              cx="282.882"
              cy="282.882"
              r="282.882"
            />
            <path
              fillOpacity=".15"
              fill="#000"
              d="M82.937 82.897h399.886v399.967H82.937z"
            />
            <path fill="#F4F1D0" d="M282.88 82.897l199.943 399.966H82.937z" />
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default PosterBody;
