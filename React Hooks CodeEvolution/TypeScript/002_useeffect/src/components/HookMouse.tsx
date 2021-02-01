import React, { useState, useEffect } from 'react';

function HookMouse() {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);

  const logMousePosition = (e: MouseEvent) => {
    console.log('Mouse Event');

    setX(e.clientX);
    setY(e.clientY);
  };

  //componentDidMount equivalent
  useEffect(() => {
    console.log('useEffect called');
    window.addEventListener('mousemove', logMousePosition);

    //Cleanup | componentWillUnmount equivalent
    return () => window.removeEventListener('mousemove', logMousePosition);
  }, []);

  return (
    <div>
      <h2>Hook Mouse</h2>X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
