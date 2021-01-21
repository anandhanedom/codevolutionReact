import React from 'react';

interface IProps {
  id: number;
  info: string;
}

const Poster: React.FC<IProps> = ({ info, id }) => {
  return (
    <div
      style={{ color: '#f4f1d0' }}
      // eslint-disable-next-line react/jsx-curly-brace-presence
      className={`text-white max-w-xs ${
        id % 2 === 0 ? 'pr-20' : 'pl-20 '
      } flex-col justify-center hidden md:flex`}
    >
      <p className="text-7xl font-body1">{id < 10 ? `0${id}` : id}</p>
      <hr className="w-1/6 mt-8" />
      <p className="text-base tracking-widest my-4 font-body1 font-medium">
        {info}
      </p>
      <button
        style={{ backgroundColor: '#1c1c1c' }}
        className="uppercase w-44 p-3 shadow-lg font-medium text-lg tracking-widest inline-block transition-colors focus:outline-none hover:opacity-90"
        type="button"
        onClick={() => console.log('hi')}
      >
        Learn More
      </button>
    </div>
  );
};

export default Poster;
