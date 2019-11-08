import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';


const reducer = (state,action) => {
  if(action.type === 'increase'){
    return {...state, payload: state.payload+1};
  }
  else if(action.type === 'decrease'){
    return {...state, payload: state.payload-1};
  }
  else{
    return state;
  }
};


const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {type:"",payload:0});
  return (
    <View>
      <Button
        onPress = {() => dispatch({type:"increase",payload: state.payload})}
        title="Increase"
      />
      <Button
        onPress = {() => dispatch({type:"decrease",payload: state.payload})}
        title="Decrease"
      />
      <Text style={styles.textStyle2}>Count : {state.payload}</Text>
    </View>
);
}

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 30
  },
  textStyle2 : {
    fontSize : 20
  }
});

export default CounterScreen;
