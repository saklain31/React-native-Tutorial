import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = 'Hi there!'; //Object is not permitted
  const farewell = <Text style={styles.textStyle2}>Tata!</Text>;
  const name = 'Saklain';
  return (
    <View>
      <Text style={styles.textStyle}>{greeting}</Text>
      <Text style={styles.textStyle2}>It's been a while!!</Text>
      <Text style={styles.textStyle2}>My name is {name}!</Text>
      {farewell}
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

export default ComponentsScreen;
