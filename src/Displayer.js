import React, { Component } from 'react';

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
const ChildComponent = (props) => {
    return(<p>{props.text}</p>);
}; 
export default Displayer;
export default ChildComponent;

//<input value={this.props.value} type='text'/>
// IS THIS SUPPOSE TO BE A SUPER PROPS, IF SO WHAT DOES IT MEAN?
//constructor(props) 
//super(props);
  //  this.state = {
    //  value: props.value //passed prop as initial value
    //}
    //this.valueChanged = this.valueChanged.bind(this);
  

//<input value={this.props.value} type='text' onChange={this.valueChanged} />

//Components receive data from outside with props, whereas they can create and manage their own data with state
//Props are used to pass data, whereas state is for managing data
//Data from props is read-only, and cannot be modified by a component that is receiving it from outside
//State data can be modified by its own component, but is private (cannot be accessed from outside)
//Props can only be passed from parent component to child (unidirectional flow)
//Modifying state should happen with the setState ( ) method