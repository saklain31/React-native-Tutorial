import React, {useReducer} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15;


const reducer = (state,action) => {
  if(action.changeColor==='red'){
    if(state.red+action.amount>255 || state.red+action.amount<0){
      return state;
    }
    else{
      return {...state, red: state.red+action.amount};
    }
  }
  else if(action.changeColor==='green'){
    if(state.green+action.amount>255 || state.green+action.amount<0){
      return state;
    }
    else{
      return {...state, green: state.green+action.amount};
    }
  }
  else if(action.changeColor==='blue'){
    if(state.blue+action.amount>255 || state.blue+action.amount<0){
      return state;
    }
    else{
      return {...state, blue: state.blue+action.amount};
    }
  }
  else {
    return state;
  }
};


const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer,{ red: 0, green: 0, blue:0 });
  const {red, green, blue} = state;

  return (
    <View>
      <ColorCounter
        colorName="Red"
        onIncrease = {() => dispatch({changeColor:'red' , amount: COLOR_INC})}
        onDecrease = {() => dispatch({changeColor:'red' , amount: -1*COLOR_INC})}
      />
      <ColorCounter
        colorName="Green"
        onIncrease = {() => dispatch({changeColor:'green', amount: COLOR_INC})}
        onDecrease = {() => dispatch({changeColor:'green', amount: -1*COLOR_INC})}
      />
      <ColorCounter
        colorName="Blue"
        onIncrease = {() => dispatch({changeColor:'blue', amount: COLOR_INC})}
        onDecrease = {() => dispatch({changeColor:'blue', amount: -1*COLOR_INC})}
      />
      <View style={{height:150, width:150, backgroundColor:`rgb(${red},${green},${blue})`}} />
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

export default SquareScreen;
