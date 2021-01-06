import React, { useState } from 'react';

function HookCounterThree() {
  const [name, setName] = useState({ firstName: '', lastName: '' });

  return (
    <div>
      <h1>Hook Counter Three</h1>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })} //SPREAD AND UPDATE THE VALUE
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })} //SPREAD AND UPDATE THE VALUE
        />

        <h2>Your first name is : {name.firstName} </h2>
        <h2>Your first name is : {name.lastName} </h2>

        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
}

export default HookCounterThree;
