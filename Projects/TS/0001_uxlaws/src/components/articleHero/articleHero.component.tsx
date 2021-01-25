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
        className="flex mx-auto max-w-4xl items-center flex-wrap"
        style={{ color: '#f4f1d0' }}
      >
        <div className="flex-1 md:mr-20">
          <h4 className="text-xl font-body1 font-medium sm:text-2xl mb-3 text-center sm:text-left">
            {
              // eslint-disable-next-line prefer-template
              `${id < 10 ? '0' + id : id}/20`
            }
          </h4>
          <h1 className="text-3xl sm:text-5xl font-bold leading-none text-center sm:text-left">
            {title}
          </h1>
        </div>
        <div className="flex-1 min-w-262 p-10 md:p-0">
          <SVGImage id={id} />
        </div>
      </div>
    </div>
  );
};

export default articleHero;
