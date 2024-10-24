import React, { useContext } from 'react';
import  {MyContext}  from './Comp';

const Abc = () => {
  const context = useContext(MyContext);

  // Check if the context is undefined
  if (!context) {
    throw new Error('MyComponent must be used within a MyProvider');
  }

  const { value, setValue } = context;

  return (
    <div>
      <p>Current value: {value}</p>
      <button onClick={() => setValue(value - 1)}>Increment</button>
    </div>
  );
};

export default Abc;
