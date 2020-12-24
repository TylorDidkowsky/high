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
    
function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        color="red" 
        height="10px"
        weight="20"
        component={HomeScreen}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  );
}

  );

};
// StackScreen = (stack.Bar) => {
  //  return (
    //  <Stack.Bar>
      //  <Stack.Screen
        //  name="Home"
          //component={HomeScreen}
          //options={{
            //title: 'My home',
            //headerStyle: {
              //backgroundColor: '#f4511e',
            //},
            //headerTintColor: '#fff',
            //headerTitleStyle: {
              //fontWeight: 'bold',
            //},
          //}}
        ///>
      //</Stack.Bar>
    //);
  //}
export default Displayer;
