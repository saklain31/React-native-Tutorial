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
      <Button
        onPress = {() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress = {() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress = {() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress = {() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <Button
        onPress = {() => navigation.navigate('Text')}
        title="Go to Text Demo"
      />
      <Button
        onPress = {() => navigation.navigate('Box')}
        title="Go to Box Demo"
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
