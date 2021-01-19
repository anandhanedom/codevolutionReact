import React from 'react';

interface IProps {
  id: number;
  info: string;
}

const Poster: React.FC<IProps> = ({ info, id }) => {
  return (
    <div className="text-white max-w-xs pl-14  flex-col justify-center hidden md:flex">
      <p className="text-7xl">{id}</p>
      <hr className="w-1/6 mt-8 mb-4" />
      <p className="text-base tracking-widest">{info}</p>
      <button
        className="shadow-lg font-bold text-lg tracking-widest inline-block"
        type="button"
        onClick={() => console.log('hi')}
      >
        Learn More
      </button>
    </div>
  );
};

export default Poster;
