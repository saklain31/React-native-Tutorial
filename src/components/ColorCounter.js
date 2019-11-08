import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const ColorCounter = ({colorName, onIncrease, onDecrease}) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.textStyle2}> {colorName} </Text>
      <Button
        onPress = {() => onIncrease()}
        title={`Increase ${colorName}`}
      />
      <Button
        onPress = {() => onDecrease()}
        title={`Decrease ${colorName}`}
      />
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

export default ColorCounter;
