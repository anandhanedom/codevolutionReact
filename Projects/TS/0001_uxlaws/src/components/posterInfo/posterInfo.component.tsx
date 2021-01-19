import React from 'react';

interface IProps {
  id: number;
  info: string;
}

const Poster: React.FC<IProps> = ({ info, id }) => {
  return (
    <div className="text-white max-w-xs pl-14  flex-col justify-center hidden md:flex">
      <p className="text-7xl">{id}</p>
      <hr className="w-1/6 mt-8" />
      <p className="text-base tracking-widest my-4">{info}</p>
      <button
        className="uppercase w-44 p-3 shadow-lg font-semibold text-lg tracking-widest inline-block bg-blue-400"
        type="button"
        onClick={() => console.log('hi')}
      >
        Learn More
      </button>
    </div>
  );
};

export default Poster;
