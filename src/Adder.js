import React from 'react';

const Adder = (props) => {
  const incrementCount = props.incrementCount;
  const decrementCount = props.decrementCount;
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Adder;
