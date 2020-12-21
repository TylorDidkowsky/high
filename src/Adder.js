import React from 'react';

const Adder = (props) => {
  const incrementCount = props.incrementCount;
  return (
    <div>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Adder;
