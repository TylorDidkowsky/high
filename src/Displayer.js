import React from 'react';

const Displayer = (props) => {
  let count = props.count;
  let theme = props.theme;
  let tylor = props.tylor;
  return (
    <div>
      <span>{count}</span> <br />
      <span>{theme}</span> <br />
      <span>{tylor}</span> <br />
    </div>
  );
};

export default Displayer;
