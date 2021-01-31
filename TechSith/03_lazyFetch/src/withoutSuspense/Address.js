import React, { useState, useEffect } from 'react';

function Address() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('111 Barcelona, Spain');
      }, 4000);
    });

    getName.then((res) => {
      setAddress(res);
    });
  }, []);

  if (!address) {
    return <div>Loading address...</div>;
  }

  return (
    <>
      <h2>Address title:</h2>
      <h4>{address}</h4>
    </>
  );
}

export default Address;
