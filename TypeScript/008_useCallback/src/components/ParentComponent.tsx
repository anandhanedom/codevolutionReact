import React, { useState, useCallback } from 'react';

//Components
import Count from './Count';
import Button from './Button';
import Title from './Title';

const ParentComponent: React.FC = () => {
  const [age, setAge] = useState<number>(25);
  const [salary, setSalary] = useState<number>(50000);

  //Same function is different after render. Hence both the button component get re-rendered.

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
};

export default ParentComponent;
