import React from 'react';

// Components
import SVGImage from '../svgImage/svgImage.component';

interface IProps {
  id: number;
  title: string;
}

const articleHero: React.FC<IProps> = ({ id, title }) => {
  return (
    <div className="container mx-auto px-4">
      <div
        className="flex mx-auto max-w-4xl items-center"
        style={{ color: '#f4f1d0' }}
      >
        <div className="flex-1">
          <h4 className="font-body1 font-medium text-2xl mb-3">
            {id < 10 ? 0 + id : id}/20
          </h4>
          <h1 className="text-5xl font-bold leading-none">{title}</h1>
        </div>
        <div className="flex-1">
          <SVGImage id={1} />
        </div>
      </div>
    </div>
  );
};

export default articleHero;
