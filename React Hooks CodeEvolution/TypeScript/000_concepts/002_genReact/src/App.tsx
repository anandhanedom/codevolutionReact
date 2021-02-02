import React, { useState } from 'react';
import './App.css';

interface Props {
  name: string;
}

interface FormProps<T> {
  values: T;
  children: (value: T) => JSX.Element;
}

//Component
const HelloWorld: React.FC<Props> = ({ name }) => {
  const [state] = useState<{ fullName: string | null }>({
    fullName: '',
  });

  return (
    <div>
      Hello {name}
      {state}
    </div>
  );
};

//Component
const Form = <T extends {}>({ values, children }: FormProps<T>) => {
  return children(values);
};

const App: React.FC = () => {
  return (
    <div className="App">
      <HelloWorld name="John Doe" />

      <Form values={{ lastName: 'bob' }}>
        {(values) => <div>{values.lastName}</div>}
      </Form>
      <Form<{ lastName: string | null }> values={{ lastName: 'bob' }}>
        {(values) => <div>{values.lastName}</div>}
      </Form>
    </div>
  );
};

export default App;
