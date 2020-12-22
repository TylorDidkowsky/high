import React from 'react';
import { Header } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

const Adder = (props) => {
  const incrementCount = props.incrementCount;
  const decrementCount = props.decrementCount;
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <button onClick={incrementCount}>+</button>
      <Header as='h4' inverted color='purple'>
        Purple
      </Header>
      <Button basic inverted color='violet'>
        Violet
      </Button>
      <Button size='huge'>Huge</Button>
      <Button negative>Negative Button</Button>
      <Button negative onClick={decrementCount}>-</Button>
    </div>
  );
};

export default Adder;
