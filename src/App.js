//import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          // Change <code>src/App.js</code> and save to reload.
        //</p>
        //<p> Hi there </p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
        //</a>
     
      //</header>
    //</div>
  //);
//}

//export default App;

import React, { useState } from 'react';

function App() { 
  const [count, setCount] = useState(4)
  
  function decrementCount() {
    setcount(prevCount => prevCount -1);
   }

   function incrementCount() {
    setcount(prevCount => prevCount +1);
   }
   }
return(
 <> 
    <button onClick={decrementCount}>-</button> 
    <span>{count}</span>
    <button onClick={incrementCount}>+</button>
</>
)