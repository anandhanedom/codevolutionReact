import React from 'react';

// Components
import PosterBody from '../posterBody/posterBody.component';
import PosterInfo from '../posterInfo/posterInfo.component';

interface IProps {
  id: number;
  title: string;
  info: string;
  color: string;
}

const Poster: React.FC<IProps> = ({ title, info, id, color }) => {
  return (
    <article className="flex justify-center py-28">
      <PosterBody id={id} title={title} color={color} />
      <PosterInfo id={id} info={info} />
    </article>
  );
};

export default Poster;
