import React, { useState } from 'react';

interface ICounterItem {
  id: number;
  value: number;
}

type CounterState = Array<ICounterItem>;

function HookCounterFour() {
  const [items, setItems] = useState<CounterState>([]);

  const addItem = () => {
    setItems([
      ...items,
      { id: items.length, value: Math.floor(Math.random() * 10) + 1 },
    ]);
  };

  return (
    <div>
      <h1>Hook Counter Four</h1>

      <button onClick={addItem}>Add number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
