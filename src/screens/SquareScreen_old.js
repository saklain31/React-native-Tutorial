import React, {useState} from 'react';
import {Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ColorCounter from '../components/ColorCounter'

const COLOR_INC = 15;



const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log(red);


  const setColor = (color,change) => {
    // color === 'red', 'green', 'blue'
    // change === +COLOR_INC, -COLOR_INC
    if(color==='red'){
      if(red+change>255 || red+change<0){
        return;
      }
      else{
        setRed(red+change);
      }
    }
    else if(color==='green'){
      if(green+change>255 || green+change<0){
        return;
      }
      else{
        setGreen(green+change);
      }
    }
    else if(color==='blue'){
      if(blue+change>255 || blue+change<0){
        return;
      }
      else{
        setBlue(blue+change);
      }
    }
  };


  return (
    <View>
      <ColorCounter
        colorName="Red"
        onIncrease = {() => setColor('red', COLOR_INC)}
        onDecrease = {() => setColor('red', -1*COLOR_INC)}
      />
      <ColorCounter
        colorName="Green"
        onIncrease = {() => setColor('green', COLOR_INC)}
        onDecrease = {() => setColor('green', -1*COLOR_INC)}
      />
      <ColorCounter
        colorName="Blue"
        onIncrease = {() => setColor('blue', COLOR_INC)}
        onDecrease = {() => setColor('blue', -1*COLOR_INC)}
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
