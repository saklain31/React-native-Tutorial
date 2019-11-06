import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome to Home Screen!</Text>
      <Button
        onPress = {() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        onPress = {() => navigation.navigate('List')}
        title="Go to List Demo"
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

export default HomeScreen;

// <TouchableOpacity onPress = {() => props.navigation.navigate('List')}>
//   <Text style={styles.textStyle2}>Go to List Demo</Text>
// </TouchableOpacity>
