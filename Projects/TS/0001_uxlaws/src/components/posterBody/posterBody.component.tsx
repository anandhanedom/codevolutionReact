import React from 'react';

import './posterBody.styles.css';

interface IProps {
  title: string;
}

const PosterBody: React.FC<IProps> = ({ title }) => {
  return (
    <div
      className="poster__body text-3xl font-bold"
      style={{ backgroundColor: '#fff' }}
    >
      {title}
    </div>
  );
};

export default PosterBody;
