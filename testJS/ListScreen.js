import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {
  // Adding unique key string to every object in List
  const friends = [
    {name : 'Friend #1', age:20},
    {name : 'Friend #2', age:25},
    {name : 'Friend #3', age:22},
    {name : 'Friend #4', age:25},
    {name : 'Friend #5', age:21},
    {name : 'Friend #6', age:22},
    {name : 'Friend #7', age:24},
    {name : 'Friend #8', age:27}
  ]
  return (
    <FlatList
    // horizontal
    // showsHorizontalScrollIndicator = {false}
    keyExtractor = {(friend)=> friend.name}
    data = {friends}
    // element ==== { item: {name: 'Friend #1'}, index : 0}
    // ES6 destructuring
    renderItem = {({item}) => {
      return <Text style = {styles.textStyle}> {item.name} - Age {item.age}</Text>
    }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle : {
    marginVertical : 50
  }
});

export default ListScreen;
