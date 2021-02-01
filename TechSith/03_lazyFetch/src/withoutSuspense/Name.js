import React, { useState, useEffect } from 'react';
import Address from './Address';

function Name() {
  const [name, setName] = useState('');

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('John Doe');
      }, 4000);
    });

    getName.then((res) => {
      setName(res);
    });
  }, []);

  if (!name) {
    return <div>Loading name...</div>;
  }

  return (
    <>
      <h2>Name Title:</h2>
      <h4>{name}</h4>
      <Address />
    </>
  );
}

export default Name;
