import React from 'react';

interface IProps {
  text: string;
  count: number;
}

const Count: React.FC<IProps> = ({ text, count }) => {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} : {count}
    </div>
  );
};

export default React.memo(Count);
