import React from 'react';

// Components
import SVGImage from '../svgImage/svgImage.component';

interface IProps {
  id: number;
  color: string;
}

const PosterGraphics: React.FC<IProps> = ({ id, color }) => {
  return (
    <div
      className="px-14 py-8 h-3/4 flex flex-col justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <SVGImage id={id} />
    </div>
  );
};

export default PosterGraphics;
