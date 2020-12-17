import React, { useState } from 'react';
import Adder from './Adder';
import Displayer from './Displayer';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('green');

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme('green');
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme('purple');
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <Adder />
      <Displayer count={count} theme={theme} tylor={1 + 2 + 3} />
      <button onClick={incrementCount}>+</button>
    </>
  );
};

export default App;
