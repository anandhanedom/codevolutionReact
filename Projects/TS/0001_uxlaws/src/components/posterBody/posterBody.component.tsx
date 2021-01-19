import React from 'react';

import './posterBody.styles.css';

interface IProps {
  title: string;
  rev: boolean;
}

const PosterBody: React.FC<IProps> = ({ title, rev }) => {
  return (
    <div
      className={`poster__body text-3xl font-bold ${rev ? 'order-last' : ''}`}
      style={{ backgroundColor: '#fff' }}
    >
      {title}
    </div>
  );
};

export default PosterBody;
