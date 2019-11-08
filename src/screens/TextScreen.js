import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

const TextScreen = () => {
  const [name,setName] = useState('');
  return (
    <View>
      <Text style={styles.textStyle2}> Enter Name </Text>
      <TextInput
        style={styles.input}
        autoCapitalize = "none"
        autoCorrect = {false}
        value = {name}
        onChangeText = {(newValue) => setName(newValue)}
      />
      { name.length>5 ? null : <Text> String Should be more than 5 characters </Text>}
      <Text style={styles.textStyle2}> String is {name} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle : {
    fontSize : 30
  },
  textStyle2 : {
    fontSize : 20
  },
  input:{
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    fontSize : 20
  }
});

export default TextScreen;
