import React, { useState } from 'react';
import Adder from './Adder';
import Displayer from './Displayer';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('teal');

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementCount = () => {
    setCount((prevCount) => prevCount - 1);
  };
  let changeTheme = () => {
    if (theme === 'green') {
      setTheme('purple');
    } else {
      setTheme('green');
    }
  };

  return (
    <div style={{ backgroundColor: 'white' }}>
       <Displayer count={count} theme={theme} tylor={1 + 2 + 3} />
      <Adder
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        changeTheme={changeTheme}
      />
    </div>
  );
};

export default App;
