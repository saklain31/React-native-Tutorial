import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore='10' />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore='8'/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore='9'/>
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

export default ImageScreen;
