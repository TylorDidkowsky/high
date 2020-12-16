import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('green')

 
const decrementCount = () => {
    setCount(prevCount => prevCount - 1) 

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
    setTheme('purple')
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
  };

//export default App;
