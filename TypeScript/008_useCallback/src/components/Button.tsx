import React from 'react';

interface IProps {
  handleClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IProps> = ({ handleClick, children }) => {
  console.log('Rendering button - ', children);

  return <button onClick={handleClick}>{children}</button>;
};

export default React.memo(Button);
