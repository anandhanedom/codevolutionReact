import React from 'react';

// Components
import PosterBody from '../posterBody/posterBody.component';
import PosterInfo from '../posterInfo/posterInfo.component';

interface IProps {
  id: number;
  title: string;
  info: string;
}

const Poster: React.FC<IProps> = ({ title, info, id }) => {
  return (
    <article className="flex justify-center">
      <PosterBody title={title} />
      <PosterInfo id={id} info={info} />
    </article>
  );
};

export default Poster;
