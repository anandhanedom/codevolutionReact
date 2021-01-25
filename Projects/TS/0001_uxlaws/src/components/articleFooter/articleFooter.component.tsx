import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  nextId: number;
  title: string;
}

const articleFooter: React.FC<IProps> = ({ nextId, title }) => {
  return (
    <div className="py-28 max-w-5xl mx-auto">
      <h4
        style={{ color: '#222' }}
        className="uppercase tracking-widest font-medium"
      >
        Next
      </h4>
      <Link to={`/articles/${nextId}`} className="font-bold text-5xl">
        {title}
      </Link>
    </div>
  );
};

export default articleFooter;
