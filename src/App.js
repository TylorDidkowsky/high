import React, { useState } from 'react';

const App = () => {
  const [state, setState] = useState({ count: 0, theme: 'green' });
  const count = state.count
const theme = state.theme
  const decrementCount = () => {
    setState((prevState) => {
return { ...prevState, count: prevState.count - 1 }
    })
  };

  const incrementCount = () => {
    //setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
};
export default App;
