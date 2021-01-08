import { useState } from 'react';

interface IBind {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

type Return = [value: string, bind: IBind, reset: () => void];

function useInput(initialValue: string): Return {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
}

export default useInput;
