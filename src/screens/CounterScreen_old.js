import React, {useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        onPress = {() => setCounter(counter+1)}
        title="Increase"
      />
      <Button
        onPress = {() => setCounter(counter-1)}
        title="Decrease"
      />
      <Text style={styles.textStyle2}>Current count : {counter}</Text>
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
