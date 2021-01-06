import React from 'react';
import { Header } from 'semantic-ui-react';

const Displayer = (props) => {
  let count = props.count;
  let theme = props.theme;
  let tylor = props.tylor;

  let HeaderExampleColored = (props) => {
    let words = props.words;
    let c = props.color;
    return (
      <div>
        <Header as='h4' color={"color"}>
          {JSON.stringify(words)}
        </Header>
      </div>
    );
  };

 
  return (
    <div>
      <HeaderExampleColored words={'hello world'} color={theme} />
      <Header color={theme}>{count}</Header> <br />
      <span>{theme}</span> <br />
      <span>{tylor}</span> <br />
    </div>
  );
  // );
};

export default Displayer;
