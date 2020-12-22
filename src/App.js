import React, { useState } from 'react';
import Adder from './Adder';
import Displayer from './Displayer';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('Aqua');

  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
    setTheme('green');
  };
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
    setTheme('purple');
  };

  return (
    <div style={{ backgroundColor: theme }}>
      <Adder incrementCount={incrementCount} decrementCount={decrementCount} />
      <Displayer count={count} theme={theme} tylor={1 + 2 + 3} />
    </div>
  );
};

export default App;
