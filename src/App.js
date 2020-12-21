import React, { Component, useState } from 'react';
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
import ChildComponent from './displayer.js'
class ParentComponent extends Component {
  render() {
    return (
      <div>
        <h1>I am the parent </h1>
        <h3><ChildComponent text="I am the child"/></h3>
      </div>
    )
  }
}
export default App;
