import React from 'react';
import { Link } from 'react-router-dom';

const articleFooter: React.FC = () => {
  return (
    <div className="py-28 max-w-5xl mx-auto">
      <h4
        style={{ color: '#222' }}
        className="uppercase tracking-widest font-medium"
      >
        Next
      </h4>
      <Link to="/articles/2" className="font-bold text-5xl">
        Doherty Threshold
      </Link>
    </div>
  );
};

export default articleFooter;
